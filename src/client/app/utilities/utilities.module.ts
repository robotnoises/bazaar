import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExtension } from './index';

@NgModule({
  imports: [CommonModule],
  providers: [HttpExtension]
  // declarations: [HttpExtension],
  // exports: [HttpExtension]
})
export class UtilitiesModule { }
