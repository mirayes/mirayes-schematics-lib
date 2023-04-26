import { TestBed } from '@angular/core/testing';

import { MirayesUiService } from './mirayes-ui.service';

describe('MirayesUiService', () => {
  let service: MirayesUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MirayesUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
