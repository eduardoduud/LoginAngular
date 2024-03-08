import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { IconComponent } from "../../../icon/icon.component";
import { ModalService } from "../../../../../services/modal.service";
import {FormsModule} from "@angular/forms";
import {RegisterModalComponent} from "../register-modal/register-modal.component";

@Component({
  selector: 'login-app-login-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    FormsModule,
    RegisterModalComponent,
  ],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent implements OnInit {
  protected readonly registerModalComponent = RegisterModalComponent;
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.getModalSubscription().subscribe((modalRef) => {
      modalRef.afterClosed().subscribe(() => {
      });
    });
  }

  closeLoginAndOpenRegister(): void {
    this.modalService.closeModal();
    this.modalService.openModal(this.registerModalComponent).subscribe(() => { });
  }
}
