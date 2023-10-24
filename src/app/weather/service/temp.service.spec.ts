import { TestBed } from '@angular/core/testing';

import { TempService } from '../service/temp.service';

describe('TempService', () => {
  let service: TempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
