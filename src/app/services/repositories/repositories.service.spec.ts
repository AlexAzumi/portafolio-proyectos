// Dependencias
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { RepositoriesService } from './repositories.service';

describe('RepositoriesService', () => {
  // Servicio
  let service: RepositoriesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(RepositoriesService);
    expect(service).toBeTruthy();
  });

  it('#getRepos should return a Repositories array', async () => {
    const response = await service.getRepos().toPromise();
    expect(typeof(response)).toEqual('object');
  });
});
