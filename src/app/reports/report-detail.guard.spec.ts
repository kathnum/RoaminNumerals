import { TestBed } from '@angular/core/testing';
import { ReportDetailGuard } from './report-detail.guard';

describe('ReportDetailGuard', () => {
  let guard: ReportDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReportDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
