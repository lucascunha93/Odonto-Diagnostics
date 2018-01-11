import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Component } from '@angular/core/src/metadata/directives';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ScreenDiagnosticComponent } from './admin/screen-diagnostic/screen-diagnostic.component';
import { EditAdminProfileComponent } from './admin/edit-admin-profile/edit-admin-profile.component';
import { ReceivedDiagnosticsComponent } from './admin/received-diagnostics/received-diagnostics.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { ReplyComponent } from './admin/reply/reply.component';

import { ScreenDiagnoticsUserComponent } from './user/screen-diagnotics-user/screen-diagnotics-user.component';
import { NewDiagnosticComponent } from './user/new-diagnostic/new-diagnostic.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';



export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'scndiag', pathMatch: 'full'},
      {path: 'scndiag', component: ScreenDiagnosticComponent},
      {path: 'editprofileadm', component: EditAdminProfileComponent},
      {path: 'recdiag', component: ReceivedDiagnosticsComponent},
      {path: 'reguser', component: RegisterUserComponent},
      {path: 'repdiag', component: ReplyComponent},
    ]
},
  {path: 'user', component: UserComponent,
  children: [
    {path: '', redirectTo: 'scndiaguser', pathMatch: 'full'},
    {path: 'scndiaguser', component: ScreenDiagnoticsUserComponent},
    {path: 'newdiag', component: NewDiagnosticComponent},
    {path: 'eduserprof', component: EditUserProfileComponent},
  ]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot (ROUTES);
