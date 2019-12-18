import { Component, OnInit, Input } from '@angular/core';
import { ElementBaseComponent } from '../element.base/element.base.component';

@Component({
  selector: 'ipx-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends ElementBaseComponent<string> implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() mask: boolean;

  identifier: string;

  ngOnInit(): any {
      this.identifier = this.getId('textfield');
  }

}
