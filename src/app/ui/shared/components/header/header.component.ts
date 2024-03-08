import { Component } from '@angular/core';
import { LoginComponent } from "../../../external/login/login.component";
import { ButtonComponent } from "../button/button.component";
import { LoginModalComponent} from "../modal/login-modal/login-modal.component";
import { ModalService } from "../../../../services/modal.service";
import { RegisterModalComponent } from "../modal/register-modal/register-modal.component";

@Component({
  selector: 'login-app-header',
  standalone: true,
  imports: [
    LoginComponent,
    ButtonComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  protected readonly loginModalComponent = LoginModalComponent;
  protected readonly registerModalComponent = RegisterModalComponent;

  constructor(private modalService: ModalService) {}

  openModal(component: any): void {
    this.modalService.openModal(component).subscribe(() => { });
  }
}
