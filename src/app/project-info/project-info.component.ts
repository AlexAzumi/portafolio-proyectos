// Dependencias
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
// Servicios
import { ProjectsService } from '../services/projects.service';
// Models
import { ProjectInfo } from '../models/project-info.model';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  // Datos
  public id: String;
  public project: ProjectInfo;
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private titleSerive: Title) { }

  ngOnInit() {
    // Obtener ID
    this.id = this.route.snapshot.params.id;
    // Obtener información del proyecto
    this.projectsService.getProjectInfo(this.id).subscribe(
      info => {
        this.project = info;
        // Cambiar título
        if (this.project != null) {
          // console.log(this.project);
          this.titleSerive.setTitle(this.project.title + ' - Portafolio de Alejando Suárez');
        } else {
          console.log('Archivo no encontrado');
        }
      }
    );
  }

}
