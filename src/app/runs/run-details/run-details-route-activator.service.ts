import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router'
import {Injectable} from '@angular/core'
import {RunService} from "../shared/run.service";
@Injectable()
export class RunDetailsRouteActivator implements CanActivate{
  constructor(private runService:RunService, private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot){
    const runExists= !!this.runService.getRun(route.params['id'])
    console.log(runExists)
    if(!runExists)
      this.router.navigate(['/404'])
    return runExists
  }
}
