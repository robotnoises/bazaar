import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './index';

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [ItemComponent],
    exports: [ItemComponent]
})
export class ItemModule { }
