import { Component } from '@angular/core';
import {LoginComponent} from "../../../external/login/login.component";
import {ButtonComponent} from "../button/button.component";
import {LoginModalComponent} from "../modal/login-modal/login-modal.component";
import {OverlayRef} from "@angular/cdk/overlay";
import {NgIf} from "@angular/common";

@Component({
  selector: 'login-app-header',
  standalone: true,
  imports: [
    LoginComponent,
    ButtonComponent,
    LoginModalComponent,
    NgIf
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isLoginModalVisible = false;
  openModal(): void {
    this.isLoginModalVisible = !this.isLoginModalVisible;
    console.log('this.isLoginModalVisible: ', this.isLoginModalVisible);
  }
  closeModal(): void {
    console.log('this.isLoginModalVisible: ', this.isLoginModalVisible);
    this.isLoginModalVisible = false;
    console.log('this.isLoginModalVisible: ', this.isLoginModalVisible);
  }
}
