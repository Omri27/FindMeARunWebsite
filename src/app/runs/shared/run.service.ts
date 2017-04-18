import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class RunService {

  constructor(private af:AngularFire) { }

getRuns(){
  return this.af.database.list('/runs');
}
getRun(id :string):FirebaseObjectObservable<any>{
  return this.af.database.object('/runs/'+id);
}
}
