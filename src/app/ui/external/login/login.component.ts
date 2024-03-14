import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  selector: 'login-app-login',
  templateUrl: './login.component.html',
  imports: [ButtonComponent, NgStyle]
})
export class LoginComponent {}
