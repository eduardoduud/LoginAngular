import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { ModalService } from '../../../../../services/modal.service';
import { IconComponent } from '../../../icon/icon.component';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'login-app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule,
    IconComponent,
    InputFieldComponent
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

  protected registerForm!: FormGroup;
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

  constructor(
    public modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      confirmPassword: [''],
      email: [''],
      day: [''],
      month: [''],
      year: ['']
    });
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }

  validateUsername(): boolean {
    return (this.isValidUsername =
      this.registerForm.value.username.length >= 4);
  }
  validatePasswordAndConfirmPass(): boolean {
    this.isValidPassword = this.registerForm.value.password.length >= 8;
    if (this.isValidPassword) {
      return (this.isValidConfirmPassword =
        this.registerForm.value.confirmPassword ===
        this.registerForm.value.password);
    }
    return this.isValidConfirmPassword;
  }

  validateBirthDate(): boolean {
    this.isValidDay =
      this.registerForm.value.day.length <= 2 &&
      this.registerForm.value.day.length > 0;
    this.isValidMonth = this.registerForm.value.isValidMonth.length > 0;
    this.isValidYear = this.registerForm.value.year.length == 4;
    return this.isValidDay && this.isValidMonth && this.isValidYear;
  }

  validateEmail(): boolean {
    //TODO: Add regex validation here or create service
    return (this.isValidEmail = this.registerForm.value.email.length > 7);
  }

  updateMonth(month: Event): void {
    console.log('month: ', (month.target as HTMLInputElement).value);
    this.registerForm.value.month = (month.target as HTMLInputElement).value;
  }

  validateUserInfo(): void {
    this.validateUsername();
    this.validatePasswordAndConfirmPass();
    this.validateBirthDate();
    this.validateEmail();
    this.isValidUserInfo =
      this.isValidUsername &&
      this.isValidPassword &&
      this.isValidConfirmPassword &&
      this.isValidDay &&
      this.isValidMonth &&
      this.isValidYear &&
      this.isValidEmail;
  }
  onSubmit() {
    this.validateUserInfo();
    if (this.isValidUserInfo) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
      this.modalService.closeModal();
    }
    console.log(this.registerForm.value);
    console.log('this.registerForm.invalid: ', this.registerForm.invalid);
  }

  resetRegisterForm(): void {
    this.registerForm.reset();
    this.modalService.closeModal();
  }
}
