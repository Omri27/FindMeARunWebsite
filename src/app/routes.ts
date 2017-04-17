import {Routes} from '@angular/router'
import {RunListComponent} from './runs/index'

export const appRoutes:Routes = [
   {path:'runs', component:RunListComponent },
    {path:'',redirectTo:'/runs', pathMatch:'full'},
      {path:'user',loadChildren:'app/user/user.module#UserModule'}
]