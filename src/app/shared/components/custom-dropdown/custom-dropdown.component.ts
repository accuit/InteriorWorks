import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Product } from '../../model/product';
import { Brand } from '../../model/brand';

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
  onChange: (brand: Brand) => void;
  onTouched: () => void;
  isDisabled: boolean;

  constructor(private readonly dataService: DataService) { }

  ngOnInit() {
    this.getProductBrands();

  }

  writeValue(obj: any) {
    this.brand = obj;
  }

  registerOnChange(fn: (brand: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  getProductBrands() {
    return this.dataService.getBrands().filter(x => x.productID === this.product.id);
  }

  onValueChange(e) {
    const Id = parseInt(e.target.value);
    const brand = this.getProductBrands().find(x => x.productID === Id);
    this.writeValue(brand);
    this.onChange(brand);
  }

}
