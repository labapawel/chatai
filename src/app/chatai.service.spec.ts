import { TestBed } from '@angular/core/testing';

import { ChataiService } from './chatai.service';

describe('ChataiService', () => {
  let service: ChataiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChataiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
