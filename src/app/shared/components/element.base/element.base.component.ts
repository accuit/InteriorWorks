import { Component, EventEmitter, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Output, Input, forwardRef, Optional, Self } from '@angular/core';
import { NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'underscore';

@Component({
  template: ''
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementBaseComponent<T = any> implements ControlValueAccessor {

  @Input() warningText: Function;
  @Input() disabled: boolean;
  @Output() readonly onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly onBlur: EventEmitter<any> = new EventEmitter<any>();

  private _val: T;
  get value(): T {
      return this._val;
  }
  set value(value: T) {
    if (value) {
      this._val = value;
      this._onChange(this._val);
    }
  }

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  get invalid(): boolean {
    return this.control ? this.control.invalid : false;
  }

  isStable = (): boolean => {
    return true;
  }

  warning = () => {
    return _.isFunction(this.warningText) ? this.warningText() : null;
  }
  showError = (): boolean => {
    if (!this.control) {
      return false;
    }
    const { dirty, touched } = this.control;

    return this.invalid ? (dirty && touched && this.isStable()) : false;
  }

  _onChange: any = () => { };
  _onTouch: any = () => { };

  writeValue = (value: T) => {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange = (fn: any) => {
    this._onChange = fn;
  }

  registerOnTouched = (fn: any) => {
    this._onTouch = fn;
  }

  change = (event: any) => {
    this._onChange(event.target ? event.target.value : null);
    this.onChange.emit(event)
  }

  onModelChange = (newValue: any) => {
    this._onChange(newValue);
    this.onChange.emit(newValue)
  };


  blur = () => {
    this.onBlur.emit();
  }

  getId(id?: string): string {
    return id ? id + '_' + Math.random().toString(36).substring(2)
      : Math.random().toString(36).substring(2)
  }

}
