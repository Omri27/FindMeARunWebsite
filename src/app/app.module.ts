import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { RunListComponent } from './runs/run-list/run-list.component';
import { RunThumbnailComponent } from './runs/run-thumbnail/run-thumbnail.component';
import { RunService } from './runs/shared/run.service';
import { AuthService } from './user/shared/auth.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import {appRoutes} from './routes';
import { Error404Component } from './errors/404.component'
import {AuthGuardService} from "./user/shared/auth-guard.service";
import { RunDetailsComponent } from './runs/run-details/run-details.component';
import {RunDetailsRouteActivator} from "./runs/run-details/run-details-route-activator.service";


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
    NavBarComponent,
    Error404Component,
    RunDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [RunService, AuthService, AuthGuardService,RunDetailsRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
