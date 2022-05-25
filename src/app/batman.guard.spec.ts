import { TestBed } from '@angular/core/testing';

import { BatmanGuard } from './batman.guard';

describe('BatmanGuard', () => {
  let guard: BatmanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BatmanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
