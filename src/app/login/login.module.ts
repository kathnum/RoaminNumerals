import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: ([
    CommonModule,
    SharedModule,
    RouterModule.forChild([
          { path: 'login', component: LoginComponent }
           ])
    ])
  })

export class LoginModule { }
