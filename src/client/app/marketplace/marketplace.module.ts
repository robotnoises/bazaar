import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [MarketplaceComponent],
    exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
