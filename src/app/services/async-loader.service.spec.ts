import { TestBed } from '@angular/core/testing';

import { AsyncLoaderService } from './async-loader.service';

describe('AsyncLoaderService', () => {
  let service: AsyncLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
