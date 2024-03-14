import { Component, Input } from '@angular/core';

@Component({
  selector: 'login-app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() name = '';
  @Input() id = '';
  @Input() label = '';
}
