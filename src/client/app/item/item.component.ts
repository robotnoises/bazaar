import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {    
    this.loaded = false;
    this.item = new Item();
  }

  ngOnInit() {
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
}
