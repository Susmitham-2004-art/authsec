import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path:"",component:LandingpageComponent
  },{
    path :"auth",
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },{
    path :"home",
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
    canActivate:[AuthGuard]
  },{
    path:"guide",
    loadChildren:()=>import('./guide/guide.module').then(m=>m.GuideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
