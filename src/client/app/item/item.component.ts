import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './index';
import { ItemService} from './item.service';

@Component({
  moduleId: module.id,
  providers: [ItemService],
  selector: 'bazaar-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {

  itemId: string;
  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { 
    this.itemId = '';
    this.item = null;
  }

  ngOnInit() {
    this.route.params.forEach(p => {
      this.itemId = p['itemId'];
    });
  }

  // Public methods

  create() {
    this.itemService.create(new Item('test', 'test description.', 100))
      .then(response => console.log(response));
  }
}
