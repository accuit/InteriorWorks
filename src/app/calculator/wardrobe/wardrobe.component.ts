import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent {

  @Output() readonly kitchenPrice: EventEmitter<any> = new EventEmitter<any>();
  formGroup: FormGroup;
  wardrobeProducts: Product[];
  kitchenCategoryID = 1;
  layout = 'L';
  wardrobe: any;
  formData: any = {};


}

export class Wardrobe {
  
}
