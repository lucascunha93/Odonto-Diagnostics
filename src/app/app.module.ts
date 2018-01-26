import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ScreenDiagnosticComponent } from './admin/screen-diagnostic/screen-diagnostic.component';
import { EditAdminProfileComponent } from './admin/edit-admin-profile/edit-admin-profile.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { ReceivedDiagnosticsComponent } from './admin/received-diagnostics/received-diagnostics.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { ReplyComponent } from './admin/reply/reply.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { NavbarUserComponent } from './user/navbar-user/navbar-user.component';
import { NewDiagnosticComponent } from './user/new-diagnostic/new-diagnostic.component';
import { ScreenDiagnoticsUserComponent } from './user/screen-diagnotics-user/screen-diagnotics-user.component';
import { InputComponent } from './shared/input/input.component';

import { routing } from './app.router';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ScreenDiagnosticComponent,
    EditAdminProfileComponent,
    NavAdminComponent,
    ReceivedDiagnosticsComponent,
    RegisterUserComponent,
    ReplyComponent,
    EditUserProfileComponent,
    NavbarUserComponent,
    NewDiagnosticComponent,
    ScreenDiagnoticsUserComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
