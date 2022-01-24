import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IReport } from './report';
import { ReportService } from './report.service';

@Component({
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
  })
  export class ReportListComponent implements OnInit, OnDestroy {
    pageTitle = 'Report List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    onNotify(message: string):void{}
    private _listFilter = '';
    sub!: Subscription;

    private _reportFilter = '';
    get reportFilter(): string {
      return this._reportFilter;
    }

    set reportFilter(value: string) {
      this._reportFilter = value;
      this.filteredReports = this.performFilter(value);
    }

    filteredReports: IReport[] = [];
    reports: IReport[] = [];

    constructor(private reportService: ReportService) {}

    performFilter(filterBy: string): IReport[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.reports.filter((report: IReport) =>
        report.reportName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.sub = this.reportService.getReports().subscribe({
        next: reports => {
          this.reports = reports;
          this.filteredReports = this.reports;
        },
        error: err => this.errorMessage = err
      });
    }
  
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
  
    onRatingClicked(message: string): void {
      this.pageTitle = 'Report List: ' + message;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredReports = this.performFilter(value);
    }

    get listFilter(): string {
      return this._listFilter;
    }

  }
  