import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'bazaar-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

  isHome: boolean;
  routerSub: any;

  constructor(private route: Router) { 
    this.routerSub = route.events.subscribe((event) => {
      this.isHome = event.url === '/';
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
