// Dependencias
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isCollapsed: Boolean = true;
  // Ocultar navbar
  collapseNavbar() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
    return false;
  }
}
