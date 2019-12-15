import { Component, OnInit, forwardRef, Output, Input, EventEmitter, HostListener, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'ipx-combo-textbox',
    templateUrl: './combo-textbox.component.html',
    styleUrls: ['./combo-textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ComboTextboxComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => ComboTextboxComponent),
            multi: true,
        }]
})
export class ComboTextboxComponent implements ControlValueAccessor {

    private dimensions : Dimension = { feet: 0, inches: 0}
    feetValue: any = 0;
    onChange: (feetValue: any) => void;
    onTouched: () => void;


    valueChanged(value: any) {
        this.writeValue(value);
    }

    writeValue(obj: any = 0): void {
        this.feetValue = obj === null ? 0 : obj;
    }

    registerOnChange(fn: (feetValue: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    @Input() prefix: string = '';
    @Input() suffix: string = '';
    @Input() step: number = 1;
    minValue: number = 0;
    maxValue: number = 100;

    availableControlKeys: string[] = ['Backspace', 'Space', 'ArrowUp', 'ArrowDown'];

    @HostListener('mousewheel', ['$event'])
    changeStep(event) {
        if (event.ctrlKey) {
            event.preventDefault();

            if (event.wheelDelta > 0) {
                this.step += 1;
            } else if (event.wheelDelta < 0 && this.step > 1) {
                this.step -= 1;
            }
        }
    }

    manageValue(event, currentValue, step, arrowChanged?, clipboardValue?): void {
        event.preventDefault();

        let newValue: number;
        let usedControlKeys;
        let charCode = String.fromCharCode(event.which).toLowerCase();

        if (arrowChanged) {
            usedControlKeys = [arrowChanged];
        } else {
            usedControlKeys = this.availableControlKeys.filter(key => key === event.code);
        }

        if (usedControlKeys.length) {
            newValue = this.modifiedValue(usedControlKeys[0], currentValue, step);
        } else if (event.type === 'paste') {
            newValue = +this.processInsertedValue(clipboardValue, currentValue);
        } else {
            newValue = this.inputValue(event.key, currentValue);
        }
        this.feetValue = newValue;
        this.onChange(newValue);
    }

    modifiedValue(usedControl, currentValue, stepChange) {

        switch (usedControl) {

            case 'Backspace':
                return `${currentValue}`.slice(0, -1);

            case 'Space':
                return currentValue;

            case 'ArrowUp':
                return this.increaseValue(currentValue, stepChange);

            case 'ArrowDown':
                return this.decreaseValue(currentValue, stepChange);

            default:
                return currentValue;
        }
    }

    increaseValue(currentValue, stepChange) {
        if (currentValue && this.maxValue) {
            return currentValue < this.maxValue ? Number(currentValue) + stepChange : currentValue;
        } else if (!currentValue && this.maxValue) {
            return stepChange < this.maxValue ? stepChange : this.maxValue;
        } else {
            return currentValue ? Number(currentValue) + stepChange : stepChange;
        }
    }

    /**
     * @method decreaseValue
     */
    decreaseValue(currentValue, stepChange) {
        return currentValue && currentValue > this.minValue ? Number(currentValue) - stepChange : 0;
    }

    inputValue(usedKey, currentValue) {
        if (isNaN(usedKey)) { return currentValue; }

        if (currentValue) {

            return `${currentValue}${usedKey}`;
        } else {

            return `${usedKey}`
        }
    }

    processInsertedValue(clipboardValue, currentValue) {
        const passedValue = parseInt(clipboardValue, 10);
    }

    // // change events from the textarea
    // private onChange(event) {

    //     // get value from text area
    //     let newValue = event.target.value;

    //     try {
    //         // parse it to json
    //         this.data = JSON.parse(newValue);
    //         this.parseError = false;
    //     } catch (ex) {
    //         // set parse error if it fails
    //         this.parseError = true;
    //     }

    //     // update the form
    //     this.propagateChange(this.data);
    // }

    // // the method set in registerOnChange to emit changes back to the form
    // private propagateChange = (_: any) => { };

}

export class Dimension{
    feet: number;
    inches: number;
}
