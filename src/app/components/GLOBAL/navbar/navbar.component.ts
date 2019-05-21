// Dependencias
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Colapsar
  public isCollapsed: Boolean = true;
  /*
   * Ocultar barra de navegación
   */
  collapseNavbar(): void {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
