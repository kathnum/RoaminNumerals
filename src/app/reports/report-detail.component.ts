import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReport } from './report';
import { ReportService } from './report.service';
@Component({
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  pageTitle = 'Report Detail';
  errorMessage = '';
  report: IReport | undefined;
  onNotify(message: string):void{}
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private reportService: ReportService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getReport(id);
    }
  }

  getReport(id: number): void {
    this.reportService.getReport(id).subscribe({
      next: report => this.report = report,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/reports']);
  }  
  
  onRatingClicked(message: string): void {
    this.pageTitle = 'Report Detail: ' + message;
  }
}
