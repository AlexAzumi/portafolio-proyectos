// Dependencias
import { Component, OnInit, HostListener } from '@angular/core';
// AOS
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*
   * OnInit
   */
  ngOnInit() {
    AOS.init();
  }

  /*
   * Offset de la página
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
    if (window.pageYOffset > 80) {
      const element = document.getElementById('navbar');
      // Pantalla mediana o mayor
      if (window.innerWidth > 768) {
        element.classList.add('sticky-top', 'navbar-sticky', 'shadow-sm');
      }
    } else {
      const element = document.getElementById('navbar');
      // Pantalla mediana o mayor
      if (window.innerWidth > 768) {
        element.classList.remove('sticky-top', 'navbar-sticky', 'shadow-sm');
      }
    }
  }
}
