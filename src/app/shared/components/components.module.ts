import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboTextboxComponent } from './combo-textbox/combo-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElementBaseComponent } from './element.base/element.base.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { IpxDropdownComponent } from './custom-dropdown/ipx-dropdown.component';
import { IpxRadioButtonComponent } from './radio-button/ipx-radio-button.component';



@NgModule({
  declarations: [ComboTextboxComponent, IpxDropdownComponent, ElementBaseComponent, TextFieldComponent, IpxRadioButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ComboTextboxComponent, IpxDropdownComponent, ElementBaseComponent, TextFieldComponent, IpxRadioButtonComponent],
  entryComponents: [ IpxDropdownComponent, TextFieldComponent]
})
export class ComponentsModule { }
