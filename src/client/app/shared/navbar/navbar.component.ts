import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './../../utilities/index';
import { LoginService } from './../../login/index';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  providers: [LoginService],
  selector: 'bazaar-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

  isHome: boolean;
  isAuthenticated: boolean;

  routerSub: any;
  authSub: any;

  constructor(private route: Router, private loginService: LoginService) { 
    
    this.routerSub = route.events.subscribe((event) => {
      this.isHome = event.url === '/';
    });

    this.authSub = StateService.auth().subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
    this.authSub.unsubscribe();
  }

  // Public methods

  logout() {
    this.loginService.logout();
  }
}
