import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './index';
import { ItemModule } from './../item/item.module';

@NgModule({
  imports: [CommonModule, ItemModule],
  declarations: [MarketplaceComponent],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
