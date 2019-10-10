// Dependencias
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// Servicios
import { ProjectsService } from 'src/app/services/projects/projects.service';
// Modelos
import { Project } from 'src/app/models/project.model';
// AOS
declare var AOS: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  // Proyectos
  public projects: Project[];
  // Observable
  private request: Subscription;

  /*
   * Constructor
   */
  constructor(public projectsService: ProjectsService) { }

  /*
   * OnInit
   */
  async ngOnInit() {
    try {
      this.projects = await this.projectsService.getProjects().toPromise();
    } catch (ex) {
      console.error(ex);
    }

    // Refrescar después de un segundo
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
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
