import { TestBed } from '@angular/core/testing';

import { LoggerToggleService } from './logger-toggle.service';

describe('LoggerToggleService', () => {
  let service: LoggerToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
