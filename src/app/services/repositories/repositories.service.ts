// Dependencias
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// Modelos
import { Repository } from 'src/app/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  // REST API
  private URI = 'https://api.github.com/users/alexazumi/repos?sort=updated';

  /*
   * Constructor
   */
  constructor(private httpClient: HttpClient) { }

  /*
   * Obtener repositorios
   */
  public getRepos(): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(this.URI);
  }
}
