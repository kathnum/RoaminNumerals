import { NgModule } from '@angular/core';
import { ReportListComponent } from './report-list.component';
import { ReportDetailComponent } from './report-detail.component';
import { RouterModule } from '@angular/router';
import { ReportDetailGuard } from './report-detail.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReportListComponent,
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'reports', component: ReportListComponent },
      {
        path: 'reports/:id',
        canActivate: [ReportDetailGuard ],
        component: ReportDetailComponent
      }
    ])
  ]
})

export class ReportModule { }