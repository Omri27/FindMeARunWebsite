import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RunService {

  constructor(private af:AngularFire) { }

getRuns(){
  return this.af.database.list('/runs');
}
}
