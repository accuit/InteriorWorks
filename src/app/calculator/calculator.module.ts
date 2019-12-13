import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CalculatorComponent } from './calculator.component';
import { RouterModule } from '@angular/router';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [KitchenComponent, CalculatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
