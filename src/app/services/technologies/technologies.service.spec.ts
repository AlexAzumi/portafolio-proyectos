// Dependencias
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { TechnologiesService } from './technologies.service';

describe('TechnologiesService', () => {
  // Servicio
  let service: TechnologiesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(TechnologiesService);
    expect(service).toBeTruthy();
  });

  it('#getTechnologies should return a string array', async () => {
   const response: string[] = await service.getTechnologies().toPromise();
   response.forEach(item => expect(typeof(item)).toEqual('string'));
  });
});
