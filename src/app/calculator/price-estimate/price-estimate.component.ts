import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-estimate',
  templateUrl: './price-estimate.component.html',
  styleUrls: ['./price-estimate.component.scss']
})
export class PriceEstimateComponent implements OnInit {
  @Input('items') items: Item[];
  @Input('title') title: string;
  @Input('value') value: string;
  constructor() { }

  ngOnInit() {
  }

}

export class Item {
  key: string;
  value: string;
  cost: number;
  image: string = 'http://placehold.it/84x84';
}
