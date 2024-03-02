import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  standalone: true,
  selector: 'login',
  templateUrl: './login.component.html',
  imports: [
    ButtonComponent
  ]
})
export class LoginComponent {
}
