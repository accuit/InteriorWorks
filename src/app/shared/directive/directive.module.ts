import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxRadioGroupDirective } from './radio/radio-group.directive';



@NgModule({
  declarations: [IgxRadioGroupDirective],
  exports: [IgxRadioGroupDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
