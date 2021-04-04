import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { UserWindowComponent } from './layout/user-window/user-window.component';

const routes: Routes = [{
  path: '', component: LoginComponent
},
  {
  path:'signup' , component: SignUpComponent
  },
  {
  path:'userWindow/:per_id' , component:UserWindowComponent
  }, {
  path : 'login' ,component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
