
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  scrollToAbout() {
    // Use the router to navigate to the same route with a fragment
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: 'about'
    }).then(() => {
      // Optional: Additional logic after navigation
    });
  }
}

