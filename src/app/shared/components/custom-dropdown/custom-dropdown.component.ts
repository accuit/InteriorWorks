import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Product } from '../../model/product';
import { Brand } from '../../model/brand';

let nextId = 0;

@Component({
  selector: 'ipx-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }]
})

export class CustomDropdownComponent implements ControlValueAccessor, OnInit {

  @Input('product') product: Product;
  products: any;
  private brand: Brand;
  _onChange: (brand: Brand) => void;
  onTouched: () => void;
  isDisabled: boolean;
  brands: Brand[];


  @HostBinding('attr.id')
  @Input() public id = `igx-radio-${nextId++}`;
  public inputId = `${this.id}-input`;

  @Input() public name: string;

  constructor(private readonly dataService: DataService) { }

  ngOnInit() {
    this.brands = this.dataService.getBrands().filter(x => x.productID === this.product.id);
  }

  writeValue(obj: any) {
    this.brand = obj;
  }

  registerOnChange(fn: (brand: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  isSelect(brandId: number): boolean {
    return !this.brand ? false : (brandId === this.brand.id);
  }

  onValueChange(e) {
    const Id = parseInt(e.target.value);
    const brand = this.brands.find(x => x.productID === Id);
    this.writeValue(brand);
    this._onChange(brand);
  }

}
