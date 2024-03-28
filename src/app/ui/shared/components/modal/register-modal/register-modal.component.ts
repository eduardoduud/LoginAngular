import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { ModalService } from '../../../../../services/modal.service';
import { IconComponent } from '../../../icon/icon.component';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { RegisterFormModel } from '../../../../../model/register-form.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    IconComponent,
    InputFieldComponent,
    FormsModule
  ]
})
export class RegisterModalComponent implements OnInit {
  protected isValidUserInfo = true;
  protected isValidUsername = true;
  protected isValidPassword = true;
  protected isValidConfirmPassword = true;
  protected isValidDay = true;
  protected isValidMonth = true;
  protected isValidYear = true;
  protected isValidEmail = true;
  protected registerFormData: RegisterFormModel = new RegisterFormModel();
  protected months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }

  validateUsername(): boolean {
    return (this.isValidUsername = this.registerFormData.username.length >= 4);
  }
  validatePasswordAndConfirmPass(): boolean {
    this.isValidPassword = this.registerFormData.password.length >= 8;
    if (this.isValidPassword) {
      return (this.isValidConfirmPassword =
        this.registerFormData.confirmPassword ===
        this.registerFormData.password);
    }
    return this.isValidConfirmPassword;
  }

  validateBirthDate(): boolean {
    this.isValidDay =
      this.registerFormData.day.length <= 2 &&
      this.registerFormData.day.length > 0;
    this.isValidMonth = this.registerFormData.month.length >= 4;
    this.isValidYear = this.registerFormData.year.length == 4;
    return this.isValidDay && this.isValidMonth && this.isValidYear;
  }

  validateEmail(): boolean {
    //TODO: Add regex validation here or create service
    return (this.isValidEmail = this.registerFormData.email.length > 7);
  }

  updateMonth(month: Event): void {
    this.registerFormData.month = (month.target as HTMLInputElement).value;
  }

  validateUserInfo(): void {
    console.log(this.registerFormData);
    this.isValidUserInfo =
      this.validateUsername() &&
      this.validatePasswordAndConfirmPass() &&
      this.validateBirthDate() &&
      this.validateEmail();
  }
  onSubmit() {
    this.validateUserInfo();
    if (this.isValidUserInfo) {
      this.closeRegisterForm();
    }
  }

  closeRegisterForm(): void {
    this.modalService.closeModal();
  }
}
