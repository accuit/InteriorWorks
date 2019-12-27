import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-estimate',
  templateUrl: './price-estimate.component.html',
  styleUrls: ['./price-estimate.component.scss']
})
export class PriceEstimateComponent implements OnInit {
@Input('title') title: string;
@Input('value') value: string;
  constructor() { }

  ngOnInit() {
  }

}
