import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { MarketplaceService } from './marketplace.service';
import { Observable } from 'rxjs/Rx';

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
  listItemsSub: any;
  count: number;
  page: number;
  scroll: boolean;

  constructor(private router: Router, private marketplaceService: MarketplaceService) { 
    this.listItems = [];
    this.count = 0;
    this.scroll = true;
    this.page = 1;
    this.listItemsSub = this.marketplaceService.init();
  }

  ngOnInit() {

    /**
     * Subscriptions
     */

    this.listItemsSub
      .subscribe((response: Response) => {
        let data = response.json();
        this.count = data.count;
        this.listItems = (this.listItems.length) ? this.listItems.concat(data.rows) : data.rows;
        this.scroll = this.listItems ? (this.listItems.length <= this.count) : false;
      });
    
    this.marketplaceService.list(this.page);
  }

  ngOnDestroy() {
    this.listItemsSub.unsubscribe();
  }

  // Public methods
  getMoreItems() {
    this.page++;
    this.marketplaceService.list(this.page);
  }
}
