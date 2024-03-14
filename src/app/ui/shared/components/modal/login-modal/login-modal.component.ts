import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { IconComponent } from '../../../icon/icon.component';
import { ModalService } from '../../../../../services/modal.service';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NgIf } from '@angular/common';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'login-app-login-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    FormsModule,
    RegisterModalComponent,
    ReactiveFormsModule,
    NgIf,
    InputFieldComponent,
  ],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent implements OnInit {
  protected readonly registerModalComponent = RegisterModalComponent;
  protected loginForm!: FormGroup;
  hidePassword: boolean = true;
  constructor(
    public modalService: ModalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.minLength(4)],
      senha: ['', Validators.minLength(8)],
    });
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }

  closeLoginAndOpenRegister(): void {
    this.modalService.closeModal();
    this.modalService
      .openModal(this.registerModalComponent)
      .subscribe(() => {});
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
