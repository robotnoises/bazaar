import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './index';
import { ItemService } from './item.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  itemId: string;
  action: string; // todo model/enum
  form: any;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) {    
    this.loaded = false;
    this.expanded = false;
    this.item = new Item();
    this.action = 'list';

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ecv: new FormControl('', [Validators.required]),
    });
  }

  private setRouteParams() {
    
    this.route.params.forEach(param => {
      if (param['itemId']) {
        this.itemId = param['itemId'];
      }
      if (param['action']) {
        this.action = param['action'];
      }
    });

    this.expanded = (this.action === 'view' || this.action === 'create') ? true : false;
  }

  ngOnInit() {
    this.setRouteParams();

    if (this.action === 'view' || this.action === 'list') {
      this.itemService.get(this.itemId)
      .then((item) => {
        if (item) {
          this.item = item as Item;
          setTimeout(() => {
            this.loaded = true;
          }, 200);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      this.loaded = true;
    }
  }

  // Public methods

  expand() {
    if (this.action === 'list') {
      this.router.navigate(['item', 'view', this.itemId]);
    }
  }

  onSubmit() {
    let newItem = new Item(this.form.value);
    this.itemService.create(newItem)
      .then(response => console.log(response))
      .catch(error => console.error(error));
    // this.loginService.login(new Login(this.form._value.email, this.form._value.password))
    //   .then((response) => {
    //     if (response && response.statusCode === 200) {
    //       this.router.navigate(['/']); // todo pass-in redirect path
    //     }
    //   });
  }
}
