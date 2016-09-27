import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ItemComponent, ItemService } from './index';

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [ItemComponent],
    //providers: [ItemService],
    exports: [ItemComponent]
})
export class ItemModule { }
