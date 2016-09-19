import { Component} from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the toolbar component.
 */

@Component({
  moduleId: module.id,
  selector: 'bazaar-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {

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

