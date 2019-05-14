// Dependencias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Modelos
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Enlace a JSON
  readonly URI = '/assets/data/projects.json';

  /*
   * Constructor
   */
  constructor(private httpClient: HttpClient) { }

  /*
   * Obtener información de proyectos
   */
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URI);
  }
}
