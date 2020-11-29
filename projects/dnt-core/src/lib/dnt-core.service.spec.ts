import { TestBed } from '@angular/core/testing';

import { DntCoreService } from './dnt-core.service';

describe('DntCoreService', () => {
  let service: DntCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DntCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
