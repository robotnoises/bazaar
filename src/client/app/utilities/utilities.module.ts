import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExtension, StateService } from './index';

@NgModule({
  imports: [CommonModule],
  providers: [HttpExtension, StateService]
})
export class UtilitiesModule { }
