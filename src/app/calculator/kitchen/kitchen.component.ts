import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/shared/model/product';
import { Brand } from 'src/app/shared/model/brand';
import { Unit } from 'src/app/shared/model/core.model';
import { Dimension } from 'src/app/shared/enums/app.enums';

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

  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  B: Unit = { feet: 0, inches: 0, type: Dimension.WIDTH };
  C: Unit = { feet: 0, inches: 0, type: Dimension.HEIGHT };

  constructor(private fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts().filter(x => x.categories.filter(y => y === this.kitchenCategoryID));
  }

}
