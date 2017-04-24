import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {AuthService} from "../../user/shared/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Http, RequestOptions, Headers} from "@angular/http";
import {LocationStrategy} from "@angular/common";

@Injectable()
export class RunService {
  runs:any
  APIADDRESS:any = '192.168.18.15'
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
      Url = 'runs';
      userId=null;
      break;
    case 'upcomingruns':
      Url = 'runs';
      userId=null;
      break;
  }
    if (userId==null) {
      return this.af.database.object('/' + Url + '/' + id);
    }
    else {
      return this.af.database.object('users/' + userId + '/' + Url + '/' + id);
    }
  }
  postForHistory(uid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://'+this.APIADDRESS+':8080/getHistoryRuns',{userId: uid},options)
  }
  getHistoryRuns(uid){
    return this.runs= this.af.database.list('users/'+uid+"/historyRuns");
}
  setLike(userId , runId,yesNo:any){
    this.af.database.object('users/'+userId + '/historyRuns/'+runId).update({marked:true})
    this.af.database.object('users/'+userId + '/historyRuns/'+runId).update({like:yesNo})
    this.postForUpdate(userId).subscribe(x=>{
      if(x.ok)
      console.log("Good");
      else
        console.log(x);
    });

  }
  postForUpdate(uid){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/updateAverage',{userId: uid},options)
  }
  signToRun(userId,runId){
    this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/runners/"+userId).set(true);
    this.af.database.object('users/'+userId+"/comingUpRuns/"+runId).set(true);
    this.af.database.object('runs/'+runId+"/runners/"+userId).set(true);
  }
  signOut(userId,runId){
    this.af.database.object("users/"+userId+"/feedRuns/"+runId+"/runners/"+userId).remove();
    this.af.database.object('users/'+userId+"/comingUpRuns/"+runId).remove();
    this.af.database.object('runs/'+runId+"/runners/"+userId).remove();
  }
}
