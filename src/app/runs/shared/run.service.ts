import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {AuthService} from "../../user/shared/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Http, RequestOptions, Headers} from "@angular/http";
import {LocationStrategy} from "@angular/common";

@Injectable()
export class RunService {
  runs:any
  APIADDRESS:any = 'localhost'
  userId:any
  constructor(private af:AngularFire,private authService: AuthService, private http: Http) {

  }
postFeedRuns(uid,location){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://'+this.APIADDRESS+':8080/getFeed',{userId: uid,langtitude:location.longtitude,latitude:location.latitude},options)
}
getFeedRuns(uid){
  if(!uid)
  return this.af.database.list('/runs');
else
    return this.af.database.list('users/'+uid+'/feedRuns');
}
  getRun(userId:any,routeUrl:any, id:any){
  let Url = null
  switch(routeUrl){
    case 'historyruns':
      Url = 'historyRuns';
      break;
    case 'runs':
      Url = 'feedRuns';
      //userId=null;
      break;
    case 'upcomingruns':
      Url = 'feedRuns';
     // userId=null;
      break;
  }
    // if (userId==null) {
    //   return this.af.database.object('/' + Url + '/' + id);
    // }
    // else {
      return this.af.database.object('users/' + userId + '/' + Url + '/' + id);
   // }
  }
  postForHistory(uid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://'+this.APIADDRESS+':8080/getHistoryRuns',{userId: uid},options)
  }
  getHistoryRuns(uid){
    return this.runs= this.af.database.list('users/'+uid+"/historyRuns");
}

  deleteHistoryRun(userId,runId){
    this.af.database.object('users/'+userId+"/historyRuns/"+runId).remove();
    this.af.database.object('users/'+userId+"/comingUpRunsIds/"+runId).remove();
  }
  postForUpdate(uid,runKey){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://'+this.APIADDRESS+':8080/updateAverage',{userId:uid,runId:runKey},options)
  }
  signToRun(userId,runId){
    this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/runners/"+userId).set(true).then(x=>{

      this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/sign").set(true).then(x=>{

        this.af.database.object("users/"+userId+"/comingUpRunsIds/"+runId).set(true).then(x=>{

           this.af.database.object('runs/'+runId+"/runners/"+userId).set(true).then(x=>{

             this.postForUpdate(userId,runId).subscribe(x=>{
               console.log(x)
             });
           });
        });
      });
    })


  }
  signOut(userId,runId){
    this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/runners/"+userId).remove().then(x=>{
      this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/sign").remove().then(x=>{
        this.af.database.object("users/"+userId+"/comingUpRunsIds/"+runId).remove().then(x=>{
          this.af.database.object('runs/'+runId+"/runners/"+userId).remove().then(x=>{
            this.postForUpdate(userId,runId).subscribe(x=>{
              console.log(x)
            });
          });
        })
      });
      }
    );


    //this.af.database.object('users/'+userId+"/comingUpRuns/"+runId).remove();

  }
}
