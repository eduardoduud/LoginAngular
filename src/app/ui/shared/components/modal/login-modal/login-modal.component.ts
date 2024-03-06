import {Component, OnDestroy, EventEmitter, Output} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {IconComponent} from "../../../icon/icon.component";

@Component({
  selector: 'login-app-login-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent
  ],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent implements OnDestroy{
  @Output() closed = new EventEmitter<void>();

  constructor() {}

  ngOnDestroy() {
    this.closeModal();
  }

  closeModal(): void {
    this.closed.emit();
  }
}
