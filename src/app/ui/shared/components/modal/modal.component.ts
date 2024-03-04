import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [
    MatButton
  ],
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalContentComponent, {
      width: '500px',
      height: '740px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
