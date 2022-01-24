import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormRequestComponent } from './form-request.component';

@NgModule({
  declarations: [
    FormRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'forms', component: FormRequestComponent }
  ])
]
})
export class FormRequestModule { }
