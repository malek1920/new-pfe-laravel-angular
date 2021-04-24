import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestResetPasswordComponent } from './password/request-reset-password/request-reset-password.component';
import { ResponseResetPasswordComponent } from './password/response-reset-password/response-reset-password.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import { ListusersComponent } from './components/dashboard/listusers/listusers.component';
import { ListofpermissionsComponent } from './components/dashboard/listofpermissions/listofpermissions.component';
import { ListofroleComponent } from './components/dashboard/listofrole/listofrole.component';
import { EditComponent } from './components/dashboard/listofrole/edit/edit.component';
import { EditPermissionComponent } from './components/dashboard/listofpermissions/edit-permission/edit-permission.component';
import { PermissiontoroleComponent } from './components/dashboard/permissiontorole/permissiontorole.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path: 'request-password-reset', component: RequestResetPasswordComponent},
  { path: 'response-password-reset', component: ResponseResetPasswordComponent},
  { path: 'dashboard', component: AdminHomeComponent,
  children: [

    { path: 'users', component: ListusersComponent},
    { path: 'listofroles', component: ListofroleComponent},
    { path: 'permissions', component: ListofpermissionsComponent},
    { path: 'role/edit-role/:id', component: EditComponent},
    { path: 'permission/edit-permission/:id', component: EditPermissionComponent},    
    { path: 'role-has-permission/:id', component: PermissiontoroleComponent},



       ]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
