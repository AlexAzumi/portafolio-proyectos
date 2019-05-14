// Dependencias
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
// Servicios
import { ProjectsService } from 'src/app/services/projects.service';
// Modelos
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Datos
  public projects: Project[];

  /*
   * Constructor
   */
  constructor(private titleService: Title, private projectsService: ProjectsService) { }

  /*
   * OnInit
   */
  ngOnInit() {
    // Obtener datos
    this.projectsService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      },
      error => {
        console.log('Error: ' + error.message);
      }
    );
  }

}
