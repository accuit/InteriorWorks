import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { IpxRadioButtonGroupDirective } from '../shared/directive/radio/radio-group.directive';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterContentInit {
  // @ViewChild('radioGroupZZ', { read: IpxRadioButtonGroupDirective, static: true }) public radioGroup: IpxRadioButtonGroupDirective;

  products: MainProduct[] = [
    { key: 1, value: 'Kitchen', cost: 0 },
    { key: 2, value: 'Wardrobe' , cost: 0 },
    { key: 3, value: 'False Ceiling', cost: 0  },
    { key: 4, value: 'Paint', cost: 0  }
  ];

  formData: any = {};
  constructor() { }

  ngOnInit() {
    this.formData.totalPrice = 0;
  }

  ngAfterContentInit(): void {
    this.formData.product = { key: 1, value: 'Kitchen' };
    // setTimeout(() => this.selectedItem = this.radioGroup.value);
  }

  getPrice(cost, productType) {
    this.products.find(x => x.key === productType).cost = cost;
    this.formData.totalPrice = cost;
  }

  onRadioChange(event): any {
    this.formData.product = event;
  }

}

export class MainProduct {
  key: number;
  value: string;
  cost: number;
}
