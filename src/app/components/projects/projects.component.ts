// Dependencias
import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Servicios
import { ProjectsService } from 'src/app/services/projects.service';
// Modelos
import { Project } from 'src/app/models/project.model';
// AOS
declare var AOS: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  // Proyectos
  public projects: Project[];
  // Observable
  private request: Subscription;

  /*
   * Observar elemento 'list'
   */
  @ViewChildren('list') list: QueryList<any>;

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
  }

  /*
   * AfterViewInit
   */
  ngAfterViewInit() {
    // Suscribirse a los cambios del ngFor
    this.list.changes.subscribe((event) => {
      AOS.refreshHard();
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
