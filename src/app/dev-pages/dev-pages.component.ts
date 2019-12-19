import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dimension } from '../shared/enums/app.enums';
import { Unit } from '../shared/model/core.model';
import { Kitchen } from '../calculator/kitchen/kitchen.component';

@Component({
  selector: 'app-dev-pages',
  templateUrl: './dev-pages.component.html',
  styleUrls: ['./dev-pages.component.scss']
})
export class DevPagesComponent implements OnInit {
  textValue = 'Hello Text';
  dimension = Dimension.LENGTH;
  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  kitchens: Kitchen[] = [
    { value: 'L', name: 'L Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan'},
    { value: 'U', name: 'U Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRacRyScjIqmYZnjbU6tvqKrIWmB9PtAuSSQh7wnuziq3MygiFw'},
    { value: 'I', name: 'Single Side I Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-Ob2Re5RoosQmTW08Wqco81kD3Pytyere6Bi4xBXOd3Z_T2a'},
    { value: 'P', name: 'Parallel Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYz187YumgO2l4JOZLdvwGtj1CMP7uKUlTaPg8Z-eVbVlgEaYw'},
  ];

  selectedItem: any =  { value: 'L', name: 'L Shape', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ab3mQ1hTGaubD5ikYglCyqCrvx0AYAU4wRCbF5Vvy6x9MWan'};
  constructor() { }

  ngOnInit() {
  }

  phone: FormControl = new FormControl('8746232', {
    updateOn: 'blur'
  });

}
