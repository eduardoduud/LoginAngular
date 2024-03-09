import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LoginModalComponent } from '../../shared/components/modal/login-modal/login-modal.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'login-app-home',
  templateUrl: './home.component.html',
  imports: [ButtonComponent, LoginModalComponent, NgIf],
})
export class HomeComponent {}
