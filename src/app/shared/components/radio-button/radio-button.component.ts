import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementBaseComponent } from '../element.base/element.base.component';

let nextUniqueId = 0;

export interface RadioButtonItem {
  name: string;
  value: string;
  image: string;
}

@Component({
  selector: 'ipx-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true,
  }]
})

export class RadioButtonComponent implements OnInit {

  ngOnInit(): void {

    this.identifier = this.getId('radio');
  }


  getId(id?: string): string {
    return id ? id + '_' + Math.random().toString(36).substring(2)
      : Math.random().toString(36).substring(2)
  }

  identifier: string;
  @Input() items: Array<any>;

  private innerValue: any;
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.change(v);
    }
  }


  onChange: Function;
  onTouched: Function;

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value: any) {
    // console.log(this.onChange);
    this.innerValue = value;
    this.onChange(value);
    this.onTouched(value);
  }

}
