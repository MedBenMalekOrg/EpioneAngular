import { TestBed } from '@angular/core/testing';

import { RecommandationService } from './recommandation.service';

describe('RecommandationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommandationService = TestBed.get(RecommandationService);
    expect(service).toBeTruthy();
  });
});
