import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded MarketplaceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'bazaar-marketplace',
  templateUrl: 'marketplace.component.html',
  styleUrls: ['marketplace.component.css']
})
export class MarketplaceComponent { 
  
  constructor(private router: Router) { }

  itemSelect(itemId) {
    this.router.navigate(['item', itemId]);
  }
}
