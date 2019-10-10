// Dependencias
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
// Modelos
import { Repository } from 'src/app/models/repository.model';
// Servicios
import { RepositoriesService } from 'src/app/services/repositories/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html'
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  // Repositorios
  public totalRepositories: Repository[];
  public repositories: Repository[];
  // Request
  public request: Subscription;

  // Paginación
  public pagination = {
    pageSize: 6,
    nextText: 'Siguiente',
    previousText: 'Anterior'
  };

  /*
   * Constructor
   */
  constructor(private repositoriesService: RepositoriesService) { }

  /*
   * OnInit
   */
  async ngOnInit() {
    try {
      this.totalRepositories = await this.repositoriesService.getRepos().toPromise();
      this.totalRepositories.filter(repo => repo.fork === false);
      this.repositories = this.totalRepositories.slice(0, this.pagination.pageSize);
    } catch (ex) {
      console.error(ex);
    }
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

  /*
   * Cambiar de página
   */
  public changePage(event: PageChangedEvent): void {
    // Calcular primer y último elemento
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    // Aplicar en el array
    this.repositories = this.totalRepositories.slice(startItem, endItem);
  }
}
