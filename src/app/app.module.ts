import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { FeedRunListComponent } from './runs/run-list/feed-run-list.component';
import { RunThumbnailComponent } from './runs/run-thumbnail/run-thumbnail.component';
import { RunService } from './runs/shared/run.service';
import { AuthService } from './user/shared/auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import {appRoutes} from './routes';
import { Error404Component } from './errors/404.component'
import {AuthGuardService} from "./user/shared/auth-guard.service";
import { RunDetailsComponent } from './runs/run-details/run-details.component';
import { HistoryRunListComponent } from './runs/history-run-list/history-run-list.component';
import { HistoryRunDetailsComponent } from './runs/history-run-details/history-run-details.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { GoogleComponent } from './runs/google/google.component';
import { SortDistancePipe } from './runs/shared/sort-distance.pipe';


export const firebaseConfig = {
  apiKey: 'AIzaSyCTkjzF0yPXV5tqVrJQ5hnGGiSss_cG1X0',
  authDomain: 'chatapp-d3713.firebaseapp.com',
  databaseURL: 'https://chatapp-d3713.firebaseio.com/',
  storageBucket: 'gs://chatapp-d3713.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};
@NgModule({
  declarations: [
    GoogleComponent,
    AppComponent,
    FeedRunListComponent,
    RunThumbnailComponent,
    NavBarComponent,
    Error404Component,
    RunDetailsComponent,
    HistoryRunListComponent,
    HistoryRunDetailsComponent,
    SortDistancePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey :'AIzaSyCcrFLwomwDjSz6m3gq035SjeezOVgqyuY',
      libraries: ["places"]
    }),RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [RunService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
