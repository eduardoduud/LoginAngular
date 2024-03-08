import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { IconComponent } from "../../../icon/icon.component";
import { ModalService } from "../../../../../services/modal.service";

@Component({
  selector: 'login-app-login-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent
  ],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.getModalSubscription().subscribe((modalRef) => {
      modalRef.afterClosed().subscribe(() => {
      });
    });
  }
}
