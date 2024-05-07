import { TestBed } from '@angular/core/testing';

import { DetailsTipsService } from './details-tips.service';

describe('DetailsTipsService', () => {
  let service: DetailsTipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsTipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
