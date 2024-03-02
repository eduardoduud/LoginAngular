import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginComponent} from "./ui/external/login/login.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ModalComponent} from "./ui/shared/components/modal/modal.component";

@Component({
  standalone: true,
  selector: 'login-root',
  templateUrl: './app.component.html',
  imports: [
    LoginComponent,
    MatDialogModule,
    ModalComponent
  ]
})

export class AppComponent {
  title = 'login app';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
