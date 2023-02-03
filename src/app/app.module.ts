import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { RecorderComponent } from './recorder/recorder.component';
import { RouterModule, Routes } from "@angular/router";
import { StripeModule } from "stripe-angular";

import {
  PS_ROOT,
  TWILIO,
  STRIPE_API,
  STRIPE_PUB_KEY,
  DEFAULT_TIMEOUT
} from './shared/global';
import {environment} from "../environments/environment";


export const MAIN_ROUTES: Routes  = [
  { path: 'recorder', component: RecorderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    RecorderComponent
  ],
  imports: [
    BrowserModule,
    StripeModule.forRoot(environment.stripePubKey),
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [
    {provide: STRIPE_API, useValue: environment.stripeApiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
