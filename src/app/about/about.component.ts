// Dependencias
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private readonly TITLE = 'Sobre mí - Portafolio de Alejandro Suárez';
  constructor(private titleService: Title) { }

  ngOnInit() {
    // Cambiar título
    this.titleService.setTitle(this.TITLE);
  }

}
