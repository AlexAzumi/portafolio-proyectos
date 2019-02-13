// Dependencias
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// Servicios
import { ProjectsService } from '../services/projects.service';
// Modelos
import { Project } from '../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Título
  private readonly TITLE = 'Proyectos - Portafolio de Alejandro Suárez';
  // Datos
  public projects: Project[];
  constructor(private titleService: Title, private projectsService: ProjectsService) { }

  ngOnInit() {
    // Cambiar título
    this.titleService.setTitle(this.TITLE);
    // Obtener datos
    this.projectsService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        console.log('Proyectos obtenidos');
      },
      error => {
        console.log('Error: ' + error.message);
      }
    );
  }

}
