// Dependencias
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  // Enlace a JSON
  readonly URI = '/assets/data/technologies.json';

  /**
   * Constructor
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Obtener tecnologías
   */
  public getTechnologies(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.URI);
  }
}
