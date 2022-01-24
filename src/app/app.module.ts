import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductModule } from './products/product.module';
import { ReportModule } from './reports/report.module';
import { FormsModule ,    ReactiveFormsModule , } from '@angular/forms';
import { FormRequestModule } from './forms/form.module';
import { LoginModule } from './login/login.module';



  //{ path: '**', component: 'PageNsotFoundComponent' }
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '',  redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations:[ 
    WelcomeComponent ,
    AppComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule, 
    ReportModule,
    FormRequestModule,
  LoginModule
  ],
  bootstrap: [AppComponent],
   exports: [RouterModule]
})
export class AppModule { }
