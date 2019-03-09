import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: Number = 2019;
  constructor() {
    this.year = new Date().getFullYear();
  }
}
