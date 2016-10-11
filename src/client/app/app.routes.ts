import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MarketplaceRoutes } from './marketplace/index';
import { ItemRoutes } from './item/index';
import { LoginRoutes } from './login/index';
import { SearchRoutes } from './search/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MarketplaceRoutes,
  ...ItemRoutes,
  ...LoginRoutes,
  ...SearchRoutes
];
