// Dependencias
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  // Año
  public year: number;

  /*
   * OnInit
   */
  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
