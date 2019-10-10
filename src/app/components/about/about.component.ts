// Dependencias
import { Component, OnInit } from '@angular/core';
// Servicios
import { TechnologiesService } from '../../services/technologies/technologies.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  // Tecnologías
  public technologies: Array<string>;

  /**
   * Constructor
   */
  constructor(private technologiesService: TechnologiesService) { }

  /**
   * OnInit
   */
  async ngOnInit() {
    try {
      this.technologies = await this.technologiesService.getTechnologies().toPromise();
    } catch (ex) {
      console.error(ex);
    }
  }
}
