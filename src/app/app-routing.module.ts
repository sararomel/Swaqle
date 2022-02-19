import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
const routes: Routes = [
  {path:'',component:LoginComponent,}, 
  {path:'register',component:RegisterComponent,},  
  {path:'home',component:HomeComponent,},  

  // {path:'details/:id',component:DetailsComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
