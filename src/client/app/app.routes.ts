import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MarketplaceRoutes } from './marketplace/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MarketplaceRoutes
];
