import { TestBed } from '@angular/core/testing';

import { RoomsHandler } from './rooms-handler';

describe('RoomsHandler', () => {
  let service: RoomsHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
