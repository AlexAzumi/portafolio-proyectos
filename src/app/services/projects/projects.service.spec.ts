// Dependencias
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { ProjectsService } from './projects.service';
// Modelos
import { Project } from 'src/app/models/project.model';

describe('ProjectsService', () => {
  // Servicio
  let service: ProjectsService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });

  it('#getProjects should return a Project array', async () => {
    const response: Array<Project> = await service.getProjects().toPromise();
    response.forEach(item => {
      expect(Object.keys(item)).toContain('title');
      expect(Object.keys(item)).toContain('description');
      expect(Object.keys(item)).toContain('date');
      expect(Object.keys(item)).toContain('img');
      expect(Object.keys(item)).toContain('url');
    });
  });
});
