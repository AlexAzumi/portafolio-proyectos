// Dependencias
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// Modelos
import { Repository } from 'src/app/models/repository.model';
// Servicios
import { RepositoriesService } from 'src/app/services/repositories/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  // Repositorios
  public repositories: Repository[];
  // Request
  public request: Subscription;

  // Paginación
  public page: number;
  public pageSize: number = 6;

  /*
   * Constructor
   */
  constructor(private repositoriesService: RepositoriesService) { }

  /*
   * OnInit
   */
  ngOnInit() {
    this.request = this.repositoriesService.getRepos().subscribe((repos) => {
      // Filtrar
      this.repositories = repos.filter((item) => item.fork === false);
      console.log(this.repositories);
    });
  }

  /*
   * OnDestroy
   */
  ngOnDestroy() {
    // Verificar si se logró la subscripción
    if (this.request != null) {
      this.request.unsubscribe();
    }
  }

}
