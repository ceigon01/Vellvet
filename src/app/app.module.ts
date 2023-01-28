import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { RecorderComponent } from './recorder/recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    RecorderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
