/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import aws_exports from './aws-exports';
import { Amplify } from '@aws-amplify/core';

import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

Amplify.configure(aws_exports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
