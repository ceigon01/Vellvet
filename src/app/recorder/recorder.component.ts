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
  public elapsedTime: string;

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
    if(this.isRecording) {
      this.recorder.stop();
      this.isRecording = false;
      this.elapsedTime = "0:00";
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
      }).catch(err => 'Error getting user media');
  }
}
