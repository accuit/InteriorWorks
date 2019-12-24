import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { IpxRadioButtonGroupDirective } from '../shared/directive/radio/radio-group.directive';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterContentInit {
  @ViewChild('radioGroupZZ', { read: IpxRadioButtonGroupDirective, static: true }) public radioGroup: IpxRadioButtonGroupDirective;

  items: any = [
    { key: 1, value: 'Kitchen' },
    { key: 2, value: 'Wardrobe' },
    { key: 3, value: 'False Ceiling' },
    { key: 4, value: 'Paint' }
  ];

  selectedItem = { key: 1, value: 'Kitchen' };
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // setTimeout(() => this.selectedItem = this.radioGroup.value);
}

  onRadioChange(event): any {
    console.log(event);
    this.selectedItem = this.items.filter(x=>x.value === event.value)[0];
  }

}
