import { TestBed } from '@angular/core/testing';

import { TemplatelistServiceService } from './templatelist-service.service';

describe('TemplatelistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplatelistServiceService = TestBed.get(TemplatelistServiceService);
    expect(service).toBeTruthy();
  });
});
