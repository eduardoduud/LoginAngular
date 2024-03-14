import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { ModalService } from '../../../../../services/modal.service';

@Component({
  selector: 'login-app-register-modal',
  templateUrl: './register-modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, ReactiveFormsModule]
})
export class RegisterModalComponent implements OnInit {
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
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.getModalSubscription().subscribe(modalRef => {
      modalRef.afterClosed().subscribe(() => {});
    });
  }
}
