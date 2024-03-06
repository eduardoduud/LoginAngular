import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import {NgStyle} from "@angular/common";
import {ModalContentComponent} from "../../shared/components/modal/modal-content/modal-content.component";

@Component({
  standalone: true,
  selector: 'login-app-login',
  templateUrl: './login.component.html',
  imports: [
    ButtonComponent,
    NgStyle,
    ModalContentComponent
  ]
})
export class LoginComponent {
}
