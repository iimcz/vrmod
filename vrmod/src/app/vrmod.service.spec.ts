import { TestBed } from '@angular/core/testing';

import { VrmodService } from './vrmod.service';

describe('VrmodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VrmodService = TestBed.get(VrmodService);
    expect(service).toBeTruthy();
  });
});
