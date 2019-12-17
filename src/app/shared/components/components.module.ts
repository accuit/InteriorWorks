import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboTextboxComponent } from './combo-textbox/combo-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { ElementBaseComponent } from './element.base/element.base.component';



@NgModule({
  declarations: [ComboTextboxComponent, CustomDropdownComponent, ElementBaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ComboTextboxComponent, CustomDropdownComponent, ElementBaseComponent],
  entryComponents: [ComboTextboxComponent, CustomDropdownComponent]
})
export class ComponentsModule { }
