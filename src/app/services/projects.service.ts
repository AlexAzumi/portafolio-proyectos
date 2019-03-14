// Dependencias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Modelos
import { Project } from '../models/project.model';
import { ProjectInfo } from '../models/project-info.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Enlace a API/JSON
  readonly URI = 'assets/data/';
  constructor(private httpClient: HttpClient) { }
  // Obtener lista de proyectos
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URI + 'projects.json');
  }

  getProjectInfo(id: String): Observable<ProjectInfo> {
    return this.httpClient.get<ProjectInfo>(this.URI + 'project/' + id + '.json');
  }
}
