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
  product: any;
  kitchenProducts: Product[];
  kitchenCategoryID = 1;
  selectedBrand: Brand = new Brand();
  kitchens: Kitchen[] = [
    { sides: 2, value: 'L', name: 'L Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan' },
    { sides: 3, value: 'U', name: 'U Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRacRyScjIqmYZnjbU6tvqKrIWmB9PtAuSSQh7wnuziq3MygiFw' },
    { sides: 1, value: 'I', name: 'Single Side I Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-Ob2Re5RoosQmTW08Wqco81kD3Pytyere6Bi4xBXOd3Z_T2a' },
    { sides: 2, value: 'P', name: 'Parallel Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYz187YumgO2l4JOZLdvwGtj1CMP7uKUlTaPg8Z-eVbVlgEaYw' },
  ];
  kitchenImage: string;
  selectedItem: Kitchen;

  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  B: Unit = { feet: 0, inches: 0, type: Dimension.WIDTH };
  C: Unit = { feet: 0, inches: 0, type: Dimension.HEIGHT };

  product1Brands: any;
  selectedBrand1 = { id: 1, name: 'Ply Board', title: 'Ply and Board', categories: [1, 2] };
  options2 = { id: 2, name: 'Inner Laminate', title: 'Inner Laminate', categories: [1, 2] };
  options3 = { id: 3, name: 'Outer Finish', title: 'Outer Finish', categories: [1, 2] };
  option4 = { id: 4, name: 'Hinges', title: 'Hinges', categories: [1, 2] };
  option5 = { id: 5, name: 'Channels', title: 'Channels', categories: [1, 2] };
  option6 = { id: 6, name: 'Full', title: 'Full Size', categories: [3] };
  option7 = { id: 7, name: 'Border', title: 'Border and Corners', categories: [3] }

  constructor(private fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit() {

    this.product1Brands = this.dataService.getBrands().filter(x => x.productID === 1);
    this.selectedBrand1 = _.first(this.product1Brands);
    this.selectedItem = { sides: 2, value: 'L', name: 'L Shape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan' };
    this.kitchenImage = this.selectedItem.imageUrl;
    this.kitchenProducts = this.dataService.getProducts().filter(x => x.categories.filter(y => y === this.kitchenCategoryID));
    this.product = { id: 1, name: 'Ply Board', title: 'Ply and Board', categories: [1, 2] };

  }


  onRadioChange(event) {
    this.selectedItem = this.kitchens.filter(x => x.value === event.value)[0];
    this.kitchenImage = this.selectedItem.imageUrl;
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
