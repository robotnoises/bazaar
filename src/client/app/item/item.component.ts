import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './index';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  providers: [ItemService],
  inputs: ['itemId'],
  selector: 'bazaar-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {

  loaded: boolean;
  expanded: boolean;
  item: Item;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) {    
    this.loaded = false;
    this.expanded = false;
    this.item = new Item();
  }

  private getItemIdFromRoute() {
    let itemId;
    this.route.params.forEach(param => {
      if (param['itemId']) {
        itemId = param['itemId'];
      }
    });

    if (itemId) {
      return itemId;
    } else {
      throw new Error('Cannot load Item. No itemId.');
    }
  }

  ngOnInit() {
    this.expanded = (this.itemId) ? false : true;
    this.itemId = this.itemId || this.getItemIdFromRoute();
    
    this.itemService.get(this.itemId)
      .then((item) => {
        if (item) {
          this.item = item as Item;
          this.loaded = true;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Public methods

  create() {
    this.itemService.create(new Item('test', 'test description.', 100))
      .then(response => console.log(response));
  }

  expand() {
    this.router.navigate(['item', this.itemId]);
  }
}
