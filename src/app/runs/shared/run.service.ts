import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {AuthService} from "../../user/shared/auth.service";

@Injectable()
export class RunService {
  userId:any
  constructor(private af:AngularFire,private authService: AuthService) {
  }

getFeedRuns(){
  return this.af.database.list('/runs');
}
getRun(id :string){
  return this.af.database.object('/runs/'+id);
}
getHistoryRuns(){
  console.log( this.authService.currentUser);


}
}
