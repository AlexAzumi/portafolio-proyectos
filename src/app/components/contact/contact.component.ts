// Dependencias
import { Component } from '@angular/core';
// Iconos
import {
  IconDefinition,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  // GitHub
  public github: IconDefinition = faGithub;
  // Correo
  public mail: IconDefinition = faEnvelope;
}
