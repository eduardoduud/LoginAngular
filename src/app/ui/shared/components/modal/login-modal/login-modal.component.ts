import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { IconComponent } from '../../../icon/icon.component';
import { ModalService } from '../../../../../services/modal.service';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
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
    InputFieldComponent
  ],
  templateUrl: './login-modal.component.html'
})
export class LoginModalComponent implements OnInit {
  protected username = '';
  protected password = '';
  protected readonly registerModalComponent = RegisterModalComponent;
  protected loginForm!: FormGroup;
  protected isValidUsername = true;
  protected isValidPassword = true;

  constructor(
    public modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }

  validateUsername(): void {
    this.isValidUsername = this.loginForm.value.username.length >= 4;
  }

  validatePassword(): void {
    this.isValidPassword = this.loginForm.value.password.length >= 8;
  }

  onSubmit() {
    this.validateUsername();
    this.validatePassword();
    if (this.isValidUsername && this.isValidPassword) {
      this.loginForm.reset();
      this.modalService.closeModal();
    }
  }

  closeLoginAndOpenRegister(): void {
    this.modalService.closeModal();
    this.modalService.openModal(this.registerModalComponent);
  }
}
