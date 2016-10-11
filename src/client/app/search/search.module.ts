import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './index';

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [SearchComponent]
})
export class SearchModule { }
