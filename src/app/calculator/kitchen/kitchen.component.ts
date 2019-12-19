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
  kitchens: Kitchen[] = [
    { value: 'L', name: 'L Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan'},
    { value: 'U', name: 'U Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRacRyScjIqmYZnjbU6tvqKrIWmB9PtAuSSQh7wnuziq3MygiFw'},
    { value: 'I', name: 'Single Side I Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-Ob2Re5RoosQmTW08Wqco81kD3Pytyere6Bi4xBXOd3Z_T2a'},
    { value: 'P', name: 'Parallel Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYz187YumgO2l4JOZLdvwGtj1CMP7uKUlTaPg8Z-eVbVlgEaYw'},
  ];
  kitchenImage: string;
  selectedItem: any =  { value: 'L', name: 'L Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan'};


  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  B: Unit = { feet: 0, inches: 0, type: Dimension.WIDTH };
  C: Unit = { feet: 0, inches: 0, type: Dimension.HEIGHT };

  constructor(private fb: FormBuilder, private readonly dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts().filter(x => x.categories.filter(y => y === this.kitchenCategoryID));
  }

  switchKitchenLayout(event: Kitchen) {
    this.kitchenImage = event.imageUrl;
  }

}

export class Kitchen {
  value: string;
  name: string;
  imageUrl: string;
}
