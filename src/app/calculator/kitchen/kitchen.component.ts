import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/shared/model/product';
import { Brand } from 'src/app/shared/model/brand';
import { Unit } from 'src/app/shared/model/core.model';
import { Dimension } from 'src/app/shared/enums/app.enums';
import * as _ from 'underscore';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  formGroup: FormGroup;
  kitchenProducts: Product[];
  kitchenCategoryID = 1;
  layout = 'L';
  kitchens: Kitchen[] = [
    { sides: 2, value: 'L', name: 'L Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan' },
    { sides: 3, value: 'U', name: 'U Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRacRyScjIqmYZnjbU6tvqKrIWmB9PtAuSSQh7wnuziq3MygiFw' },
    { sides: 1, value: 'I', name: 'Single Side I Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-Ob2Re5RoosQmTW08Wqco81kD3Pytyere6Bi4xBXOd3Z_T2a' },
    { sides: 2, value: 'P', name: 'Parallel Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYz187YumgO2l4JOZLdvwGtj1CMP7uKUlTaPg8Z-eVbVlgEaYw' },
  ];
  kitchenImage: string;
  selectedKitchen: Kitchen;
  formData: any = {};

  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  B: Unit = { feet: 0, inches: 0, type: Dimension.WIDTH };
  C: Unit = { feet: 0, inches: 0, type: Dimension.HEIGHT };

  product1Brands: any;
  selectedBrand1;
  product2Brands: any;
  selectedBrand2;
  product3Brands: any;
  selectedBrand3;
  product4Brands: any;
  selectedBrand4;
  product5Brands: any;
  selectedBrand5;
  product6Brands: any;
  selectedBrand6;
  product7Brands: any;
  selectedBrand7;
  product8Brands: any;
  selectedBrand8;

  constructor(private fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit() {

    this.initializeBrands();
    this.initializeFormData();

    this.kitchenProducts = this.dataService.getProducts().filter(x => x.categories.filter(y => y === this.kitchenCategoryID));
  }

  initializeFormData() {
    this.formData.selectedKitchen = this.selectedKitchen = { sides: 2, value: 'L', name: 'L Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan' };
    this.kitchenImage = this.selectedKitchen.imageUrl;
    this.formData.kitchenHeight = 'Standard';
  }

  initializeBrands() {
    this.product1Brands = this.dataService.getBrands().filter(x => x.productID === 1);
    this.formData.selectedBrand1 = _.first(this.product1Brands);

    this.product2Brands = this.dataService.getBrands().filter(x => x.productID === 2);
    this.formData.selectedBrand2 = _.first(this.product2Brands);

    this.product3Brands = this.dataService.getBrands().filter(x => x.productID === 3);
    this.formData.selectedBrand3 = _.first(this.product3Brands);

    this.product4Brands = this.dataService.getBrands().filter(x => x.productID === 4);
    this.formData.selectedBrand4 = _.first(this.product4Brands);

    this.product5Brands = this.dataService.getBrands().filter(x => x.productID === 5);
    this.formData.selectedBrand5 = _.first(this.product5Brands);

    this.product6Brands = this.dataService.getBrands().filter(x => x.productID === 6);
    this.formData.selectedBrand6 = _.first(this.product6Brands);

    this.product7Brands = this.dataService.getBrands().filter(x => x.productID === 7);
    this.formData.selectedBrand7 = _.first(this.product7Brands);

    this.product8Brands = this.dataService.getBrands().filter(x => x.productID === 8);
    this.formData.selectedBrand8 = _.first(this.product8Brands);

  }


  onRadioChange(event) {
    const value = event.target.attributes['ng-reflect-value'].value;
    this.formData.selectedKitchen = this.kitchens.filter(x => x.value === value)[0];
    this.kitchenImage = this.selectedKitchen.imageUrl;
  }

  manageBrands(event) {
    console.log(event);
  }

}

export class Kitchen {
  sides: number;
  value: string;
  name: string;
  imageUrl: string;
}
