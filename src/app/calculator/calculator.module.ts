import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CalculatorComponent } from './calculator.component';
import { RouterModule } from '@angular/router';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceEstimateComponent } from './price-estimate/price-estimate.component';



@NgModule({
  declarations: [KitchenComponent, CalculatorComponent, PriceEstimateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
