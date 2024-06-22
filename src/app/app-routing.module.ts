
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'; 
import { RegisterComponent } from './register/register.component'; 

const routes: Routes = [
 //{ path: '**', component: UserComponent } ,
  { path: 'user', component: UserComponent } ,
  { path: 'register', component: RegisterComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
