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
  // Enlace a API/JSON
  private URL = 'assets/data/projects.json';
  constructor(private httpClient: HttpClient) { }
  // Obtener lista de proyectos
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL);
  }
}
