import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from './marketplace.service';

/**
 * This class represents the lazy loaded MarketplaceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'bazaar-marketplace',
  providers: [MarketplaceService],
  templateUrl: 'marketplace.component.html',
  styleUrls: ['marketplace.component.css']
})
export class MarketplaceComponent { 
  
  listItems: any;

  constructor(private router: Router, private marketplaceService: MarketplaceService) { 
    this.listItems = [];
  }

  ngOnInit() {
    this.marketplaceService.list()
      .then((listItems) => {
        this.listItems = listItems;
      });
  }

  itemSelect(itemId) {
    this.router.navigate(['item', itemId]);
  }
}
