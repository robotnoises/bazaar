import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './../../utilities/index';

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
  isAuthenticated: boolean;
  routerSub: any;

  constructor(private route: Router) { 
    this.routerSub = route.events.subscribe((event) => {
      this.isHome = event.url === '/';
    });
  }

  ngOnInit() {
    StateService.auth().subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
