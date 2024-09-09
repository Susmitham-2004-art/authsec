import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  isActive: boolean = true;
  toggle() {
    this.isActive = !this.isActive;
  }
}
