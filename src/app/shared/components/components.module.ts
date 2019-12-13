import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboTextboxComponent } from './combo-textbox/combo-textbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ComboTextboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ComboTextboxComponent],
  entryComponents: [ComboTextboxComponent]
})
export class ComponentsModule { }
