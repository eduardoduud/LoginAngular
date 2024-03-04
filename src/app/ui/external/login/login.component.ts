import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from "../../shared/components/modal/modal.component";
import {NgStyle} from "@angular/common";

@Component({
  standalone: true,
  selector: 'login',
  templateUrl: './login.component.html',
  imports: [
    ButtonComponent,
    ModalComponent,
    NgStyle
  ]
})
export class LoginComponent {
}
