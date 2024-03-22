import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'login-app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent {
  @Input() name = '';
  @Input() id = '';
  @Input() label = '';
  @Output() onValueChange = new EventEmitter<string>();

  onChange(value: Event): void {
    this.onValueChange.emit((value.target as HTMLInputElement).value);
  }
}
