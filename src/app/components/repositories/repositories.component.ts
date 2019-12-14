// Dependencias
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
// Modelos
import { Repository } from 'src/app/models/repository.model';
// Servicios
import { RepositoriesService } from 'src/app/services/repositories/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html'
})
export class RepositoriesComponent implements OnInit {
  // Repositorios
  public totalRepositories: Repository[];
  public repositories: Repository[];

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
      console.log(this.totalRepositories);
      this.totalRepositories = this.totalRepositories.filter(repo => !repo.fork);
      this.repositories = this.totalRepositories.slice(0, this.pagination.pageSize);
    } catch (ex) {
      console.error(ex);
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
