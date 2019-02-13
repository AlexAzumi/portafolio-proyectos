import { TestBed } from '@angular/core/testing';

import { ProjectInfoService } from './project-info.service';

describe('ProjectInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectInfoService = TestBed.get(ProjectInfoService);
    expect(service).toBeTruthy();
  });
});
