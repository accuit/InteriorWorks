import { Component, OnInit, forwardRef, Output, Input, EventEmitter, HostListener, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

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
export class ComboTextboxComponent implements ControlValueAccessor, Validator {


    @HostBinding('class.ng-cint') true;
    @ViewChild('ngCintInput', { static: true }) ngCintInput: ElementRef;

    @Input() showLabel: boolean = true;
    @Input('label') title: string = 'Counter with a label:';
    @Input() required: boolean = true;
    @Input() prefix: string = '';
    @Input() suffix: string = '';
    @Input('value') ngCintValue: number = 0;
    @Input() step: number = 1;
    minValue: number = 0;
    maxValue: number = 100;

    availableControlKeys: string[] = ['Backspace', 'Space', 'ArrowUp', 'ArrowDown'];

    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() blured: EventEmitter<any> = new EventEmitter();
    @Output() valueChanged: EventEmitter<any> = new EventEmitter();

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

    /**
     * @method manageValue
     */
    manageValue(event, currentValue, step, arrowChanged?, clipboardValue?) {
        event.preventDefault();

        let newValue;
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
            newValue = this.processInsertedValue(clipboardValue, currentValue);
        } else {
            newValue = this.inputValue(event.key, currentValue);
        }

        this.valueChanged.emit(newValue);
        return newValue;
    }

    /**
     * @method modifiedValue
     */
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

    /**
     * @method increaseValue
     */
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

    /**
     * @method inputValue
     */
    inputValue(usedKey, currentValue) {
        if (isNaN(usedKey)) { return currentValue; }

        if (currentValue) {

            return `${currentValue}${usedKey}`;
        } else {

            return `${usedKey}`
        }
    }

    /**
     * @method processInsertedValue
     */
    processInsertedValue(clipboardValue, currentValue) {
        const passedValue = parseInt(clipboardValue, 10);
    }


    private jsonString: string;
    private parseError: boolean;
    private data: any;

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            this.jsonString = JSON.stringify(this.data, undefined, 4);
        }
    }

    // registers 'fn' that will be fired wheb changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // validates the form, returns null when valid else the validation object
    // in this case we're checking if the json parsing has passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

    // not used, used for touch input
    public registerOnTouched() { }

    // change events from the textarea
    private onChange(event) {

        // get value from text area
        let newValue = event.target.value;

        try {
            // parse it to json
            this.data = JSON.parse(newValue);
            this.parseError = false;
        } catch (ex) {
            // set parse error if it fails
            this.parseError = true;
        }

        // update the form
        this.propagateChange(this.data);
    }

    // the method set in registerOnChange to emit changes back to the form
    private propagateChange = (_: any) => { };

}
