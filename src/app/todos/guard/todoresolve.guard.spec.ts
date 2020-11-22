import { TestBed } from '@angular/core/testing';

import { TodoresolveGuard } from './todoresolve.guard';

describe('TodoresolveGuard', () => {
  let guard: TodoresolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodoresolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
