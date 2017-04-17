import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { RunListComponent } from './run-list/run-list.component';
import { RunThumbnailComponent } from './run-thumbnail/run-thumbnail.component';
import { RunService } from './run.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCTkjzF0yPXV5tqVrJQ5hnGGiSss_cG1X0',
  authDomain: 'chatapp-d3713.firebaseapp.com',
  databaseURL: 'https://chatapp-d3713.firebaseio.com/',
  storageBucket: 'gs://chatapp-d3713.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};
@NgModule({
  declarations: [
    AppComponent,
    RunListComponent,
    RunThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
