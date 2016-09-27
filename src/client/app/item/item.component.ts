import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Item {
  title: string;
  description: string;
  ecv: number;
}

@Component({
  moduleId: module.id,
  selector: 'bazaar-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {

  itemId: string;
  item: Item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(p => {
      this.itemId = p['itemId'];
    });
  }

  // Public methods

  create() {
    // todo
  }
}
