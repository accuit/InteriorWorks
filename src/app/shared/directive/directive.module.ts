import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpxRadioButtonGroupDirective } from './radio/radio-group.directive';

@NgModule({
  declarations: [IpxRadioButtonGroupDirective],
  exports: [IpxRadioButtonGroupDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
