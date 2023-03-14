import { Component } from '@angular/core';
import { faMicrophone, faSquare } from '@fortawesome/free-solid-svg-icons';
import { Storage, Auth, Predictions } from 'aws-amplify';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Observable, of} from "rxjs";
import { APIService } from '../API.service';
import { Buffer } from "buffer";
import aws_exports from '../../aws-exports';


@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})

export class RecorderComponent {
  recording:boolean;
  micRecorder: MediaRecorder;
  audioBuffer = [];
  recordedBlob:SafeUrl;
  elapsedTime: string;
  faMicrophone = faMicrophone;
  faSquare = faSquare;
  spokenText:string = '';
  spokenTextError:string = '';

  constructor(private sanitizer: DomSanitizer, private api: APIService) {
  }
  
  getElapsedTime(start: Date): string {
    const now = new Date();
    console.log(`Elapsed time: ${this.elapsedTime} milliseconds`);
    let elapsed = (now.getTime() - start.getTime());
    return this.msConversion(elapsed);
  }

  msConversion(millis) {
    let sec:any = Math.floor(millis / 1000);
    let hrs:any= Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min:any  = Math.floor(sec / 60);
    sec -= min * 60;

    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);

    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + ":" + min + ":" + sec;
    }
    else {
      return min + ":" + sec;
    }
  }
  
  recordAudio () {
    if(this.recording) {
      this.recording = !this.recording;
      this.micRecorder.stop();
      return;
    }
    this.recording = !this.recording;
    this.audioBuffer = [];
    this.elapsedTime = "0:00";
    this.recordedBlob = "";
    this.spokenText = '';
    this.spokenTextError = '';
    let ng = this;
    // Get user media
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(async stream => {
        // Create a recorder
        console.log(stream);
        ng.micRecorder = new MediaRecorder(stream, { audioBitsPerSecond : 16000 });
        ng.micRecorder.addEventListener('dataavailable', async (e) => {
          ng.audioBuffer.push(e.data);
        });
        // Start recording
        ng.micRecorder.start();
        let start = new Date();
        let refreshIntervalId = setInterval(() => {
          if(ng.recording) {
            // Your task code
            ng.elapsedTime = ng.getElapsedTime(start);
          }
        }, 1000);

        ng.micRecorder.addEventListener('stop', async () => {
          console.log("stopped");
          clearInterval(refreshIntervalId);
          if(ng.micRecorder.state === 'inactive') {
            await ng._processRecording();
          }
        });
      }).catch(err => 'Error getting user media');
  }

  async _processRecording() {
    const blob = new Blob(this.audioBuffer, {type: "application/octet-stream"});
    this.recordedBlob = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
    let ng = this;
    const credentials = await Auth.currentUserCredentials();
    console.log("identityId", credentials.identityId);
    let fileKey = new Date().valueOf().toString();
    Storage.put(fileKey, blob, {
      contentType: "application/octet-stream", level: 'private'
    })
      .then((result) => {
        console.log("Blob stored", result);
        Predictions.convert({
          transcription: {
            source: {
              bytes: blob
            },
            language: "en-US", // other options are "en-GB", "fr-FR", "fr-CA", "es-US"
          },
        })
          .then((value) => {
            console.log("parsed text", value);
            this.setText(JSON.stringify(value));
          }).catch(err => {
            console.error("Error converting speech to text", err);
            this.setError(JSON.stringify(err.message, null, 2));
          })
          /*
          ng.api.CreateRecordedNote({
          name: "Note Created at " + new Date(),
          recording: {
            bucket: aws_exports.aws_user_files_s3_bucket,
            key: `private/${credentials.identityId}/${fileKey}`,
            region: aws_exports.aws_user_files_s3_bucket_region
          }
        }).then(async (createdNote) => {
          ng.api.OnUpdateRecordedNoteListener({
            id: { eq: createdNote.id },
            transcription: { }
          })
          let resp = await ng.api.TranscribeToMedicalSOAPNotes(aws_exports.aws_user_files_s3_bucket, aws_exports.aws_user_files_s3_bucket_region, `private/${credentials.identityId}/${fileKey}`, "{}");
          console.log("Response", resp);
          ng.setText(JSON.parse(resp)?.transcription);
        })
        */
      })
      .catch(err => console.log("Error uploading blob", err));
  }

  setText(text: string): any {
    this.spokenText += text;
  }

  setError(error: string): any {
    this.spokenTextError = error;
  }
}
