import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {AuthService} from "../../user/shared/auth.service";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class RunService {
  userId:any
  constructor(private af:AngularFire,private authService: AuthService) {

  }

getFeedRuns(){
  return this.af.database.list('/runs');
}
// getRun(id :string){
//   return this.af.database.object('/runs/'+id);
// }
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
  }
  console.log(userId)
    if (userId==null) {
      console.log("null")
      return this.af.database.object('/' + Url + '/' + id);
    }
    else {
      console.log("notnull")
      return this.af.database.object('users/' + userId + '/' + Url + '/' + id);
    }
  }
getHistoryRuns(uid){
   return this.af.database.list('users/'+uid+"/historyRuns");
}
  getUpcomingRuns(uid){
    return this.af.database.list('users/'+uid+"/comingUpRuns");
  }
  setLike(userId , runId,yesNo:any){
    this.af.database.object('users/'+userId + '/historyRuns/'+runId).update({marked:true})
    this.af.database.object('users/'+userId + '/historyRuns/'+runId).update({like:yesNo})
  }
}
