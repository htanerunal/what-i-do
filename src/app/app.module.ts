import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDPsLPoWhlbwOJMtSxyvSjfNZRbF8kutCk",
  authDomain: "angular4project-a4a3e.firebaseapp.com",
  databaseURL: "https://angular4project-a4a3e.firebaseio.com",
  projectId: "angular4project-a4a3e",
  storageBucket: "",
  messagingSenderId: "1041517030744"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
