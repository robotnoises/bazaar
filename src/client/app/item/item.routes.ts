import { Route } from '@angular/router';
import { ItemComponent } from './index';

export const ItemRoutes: Route[] = [
  { 
    path: 'item',
    component: ItemComponent
  },
  { 
    path: 'item/:action',
    component: ItemComponent
  },
  { 
    path: 'item/:action/:itemId',
    component: ItemComponent
  }
];
