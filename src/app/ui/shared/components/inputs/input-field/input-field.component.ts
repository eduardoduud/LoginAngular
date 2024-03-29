import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../icon/icon.component';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'login-app-input-field',
  standalone: true,
  imports: [IconComponent, NgIf, NgTemplateOutlet, FormsModule, NgClass],
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent {
  @Input() id = '';
  @Input() isErrorMessageVisible = false;
  @Input() label = '';
  @Input() minLength = 0;
  @Input() maxLength = 50;
  @Input() name = '';
  @Input() placeHolder = '';
  @Input() required = false;
  @Input() readonly = false;
  @Input() type = '';
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  protected hidePassword: boolean = true;
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
