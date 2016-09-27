import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [ItemComponent],
    exports: [ItemComponent]
})
export class ItemModule { }
