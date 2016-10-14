import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemComponent } from './index';

@NgModule({
    imports: [CommonModule, HttpModule, ReactiveFormsModule],
    declarations: [ItemComponent],
    exports: [ItemComponent]
})
export class ItemModule { }
