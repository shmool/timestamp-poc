import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"timestamp-sj",
      "appId":"1:403380079015:web:adcf0b1c7e9362f142ce82",
      "storageBucket":"timestamp-sj.appspot.com",
      "apiKey":"AIzaSyAWk7w3yszuMjftuGREWou9TK0U1byfc7o",
      "authDomain":"timestamp-sj.firebaseapp.com",
      "messagingSenderId":"403380079015","measurementId":"G-QZGHZ8YTNH"
    }))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideFunctions(() => getFunctions()))]
};
