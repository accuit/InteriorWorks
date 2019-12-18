import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dimension } from '../shared/enums/app.enums';
import { Unit } from '../shared/model/core.model';

@Component({
  selector: 'app-dev-pages',
  templateUrl: './dev-pages.component.html',
  styleUrls: ['./dev-pages.component.scss']
})
export class DevPagesComponent implements OnInit {
  textValue = 'Hello Text';
  dimension = Dimension.LENGTH;
  A: Unit = { feet: 0, inches: 0, type: Dimension.LENGTH };
  constructor() { }

  ngOnInit() {
  }

  phone: FormControl = new FormControl('8746232', {
    updateOn: 'blur'
  });

}
