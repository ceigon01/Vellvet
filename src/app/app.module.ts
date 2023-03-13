import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { RecorderComponent } from './recorder/recorder.component';

import { StripeModule } from "stripe-angular";

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  PS_ROOT,
  TWILIO,
  STRIPE_API,
  STRIPE_PUB_KEY,
  DEFAULT_TIMEOUT
} from './shared/global';
import {environment} from "../environments/environment";



@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    RecorderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    StripeModule.forRoot(environment.stripePubKey),
    AmplifyAuthenticatorModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: STRIPE_API, useValue: environment.stripeApiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
