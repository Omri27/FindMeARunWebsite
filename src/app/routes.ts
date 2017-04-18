import {Routes} from '@angular/router'
import {RunListComponent} from './runs/index'
import {AuthGuardService} from "./user/shared/auth-guard.service";
import {RunDetailsComponent} from "./runs/run-details/run-details.component";
import {RunDetailsRouteActivator} from "./runs/run-details/run-details-route-activator.service";

export const appRoutes:Routes = [
    {path:'runs', component:RunListComponent/*, canActivate: [AuthGuardService]  */},
    {path:'',redirectTo:'/runs', pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.module#UserModule'},
    {path:'runs/:id', component: RunDetailsComponent},
]
