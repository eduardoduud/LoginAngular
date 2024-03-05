import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'login-app-modal-content',
  templateUrl: './modal-content.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
})
export class ModalContentComponent {
  protected meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
}
