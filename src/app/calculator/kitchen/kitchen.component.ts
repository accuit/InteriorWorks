import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/shared/model/product';
import { Brand } from 'src/app/shared/model/brand';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  formGroup: FormGroup;
  products: Product[];
  kitchenCategoryID = 1;
  selectedBrand: Brand = new Brand();
  constructor(private fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts().filter(x => x.categories.filter(y => y === this.kitchenCategoryID));
  }

}
