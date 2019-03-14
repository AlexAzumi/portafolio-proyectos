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
  // ParticleJS
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;
  
  constructor(private titleService: Title) { }

  ngOnInit() {
    // Cambiar título
    this.titleService.setTitle(this.TITLE);
    // ParticleJS
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': '#212529'
    };
    this.myParams = {
      particles: {
        number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800
            }
        },
        color: {
            value: '#536DFE'
        },
        shape: {
            type: 'polygon',
            polygon: {
              nb_sides: 6
            }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 100,
          random: false,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 10,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: 'false',
          atrract: {
            enable: false
          }
        }
      }
    };
  }

}
