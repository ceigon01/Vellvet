import { Component } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent {
  public isRecording:boolean;
  public recorder:MediaRecorder;
  public elapsedTime: number;

  getElapsedTime(start: Date): number {
    const now = new Date();
    console.log(`Elapsed time: ${this.elapsedTime} milliseconds`);
    return Math.round((now.getTime() - start.getTime()) / 1000);
  }

  recordAudio () {
    if(this.isRecording) {
      this.recorder.stop();
      this.isRecording = false;
      return;
    }
    // Get user media
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        let ng = this;
        // Create a recorder
        console.log(stream)
        this.recorder = new MediaRecorder(stream);
        // Start recording
        this.recorder.start();
        let refreshIntervalId
        this.recorder.onstart = function (ev){


        }
        let start = new Date();
        refreshIntervalId = setInterval(() => {
          // Your task code
          ng.elapsedTime = ng.getElapsedTime(start);
        }, 1000);

        this.recorder.onstop = function(ev){
          console.log("stopped");
          clearInterval(refreshIntervalId);
          ng.isRecording = false;
        }
        this.recorder.addEventListener('dataavailable', (e) => {
          // convert the stream to a blob
          const blob = new Blob([e.data], {type: 'audio/ogg'});
          console.log(blob);
        });

        this.isRecording = !this.isRecording;
      })
      .catch(err => 'Error getting user media');
  }
}
