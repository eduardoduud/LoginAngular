import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class ModalContentComponent {
  protected meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
}
