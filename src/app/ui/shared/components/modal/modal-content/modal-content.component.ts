import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../button/button.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    MatButton
  ],
})
export class ModalContentComponent {
  protected meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
}
