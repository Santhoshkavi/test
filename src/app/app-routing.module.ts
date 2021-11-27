import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
//{path:"",component:LoginComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"admin",component:AdminComponent},
{path:"staff",component:StaffComponent},
{path:"home",component:HomeComponent},
{path:"adduser",component:AdduserComponent},
{path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
