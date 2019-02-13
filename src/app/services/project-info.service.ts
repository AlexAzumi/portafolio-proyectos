// Dependencias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Modelos
import { ProjectInfo } from '../models/project-info.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  private readonly URL = 'assets/data/project/';
  constructor(private httpClient: HttpClient) { }

  // Obtener información del proyecto
  getProjectInfo(id): Observable<ProjectInfo> {
    return this.httpClient.get<ProjectInfo>(this.URL + id + ".json");
  }
}
