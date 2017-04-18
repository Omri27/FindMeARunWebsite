import {Routes} from '@angular/router'
import {FeedRunListComponent} from './runs/index'
import {AuthGuardService} from "./user/shared/auth-guard.service";
import {RunDetailsComponent} from "./runs/run-details/run-details.component";
import {RunDetailsRouteActivator} from "./runs/run-details/run-details-route-activator.service";
import {HistoryRunListComponent} from "./runs/history-run-list/history-run-list.component";

export const appRoutes:Routes = [
    {path:'runs', component:FeedRunListComponent/*, canActivate: [AuthGuardService]  */},
    {path:'',redirectTo:'/runs', pathMatch:'full'},
    {path:'historyruns', component:HistoryRunListComponent/*, canActivate: [AuthGuardService]  */},
    {path:'user',loadChildren:'app/user/user.module#UserModule'},
    {path:'runs/:id', component: RunDetailsComponent},
]
