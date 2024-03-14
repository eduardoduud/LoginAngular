import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { ModalService } from '../../../../../services/modal.service';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'login-app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule,
    IconComponent
  ]
})
export class RegisterModalComponent implements OnInit {
  registerForm: FormGroup;
  protected meses = [
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

  constructor(public modalService: ModalService) {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', [
          Validators.minLength(4),
          Validators.required
        ]),
        confirmPassword: new FormControl('', [
          Validators.minLength(4),
          this.passwordMatchValidator,
          Validators.required
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        day: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required)
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmPassword')?.value
      ? { mismatch: false }
      : { mismatch: true };
  }

  ngOnInit(): void {
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
