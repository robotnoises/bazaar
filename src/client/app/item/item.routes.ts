import { Route } from '@angular/router';
import { ItemComponent } from './index';

export const ItemRoutes: Route[] = [
  { 
    path: 'item',
    component: ItemComponent
  },
  { 
    path: 'item/:itemId',
    component: ItemComponent
  }
];
