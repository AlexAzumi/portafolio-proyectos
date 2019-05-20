// Dependencias
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Servicios
import { ProjectsService } from 'src/app/services/projects/projects.service';
// Modelos
import { Project } from 'src/app/models/project.model';
// AOS
declare var AOS: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
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
  ngOnInit() {
    // Guardar subscripción
    this.request = this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
    }, (error) => console.log(error));
    // Refrescar después de un segundo
    const refresh = setTimeout(() => {
      AOS.refresh();
      console.log('AOS refrescado');
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
