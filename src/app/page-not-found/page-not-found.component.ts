// Dependencias
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  private readonly TITLE = '404 página no encontrada - Portafolio de Alejandro Suárez';
  constructor(private titleService: Title) { }

  ngOnInit() {
    // Cambiar título
    this.titleService.setTitle(this.TITLE);
  }

}
