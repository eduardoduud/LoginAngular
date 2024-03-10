import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';

/* eslint-disable @typescript-eslint/no-explicit-any */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<MatDialogRef<any>>();
  private currentModalRef: MatDialogRef<any> | null = null;

  constructor(private dialog: MatDialog) {}

  openModal(component: any): Observable<void> {
    if (this.currentModalRef) {
      // If a modal is already open, close it before opening a new one
      this.currentModalRef.close();
    }

    const dialogRef = this.dialog.open(component);

    // Store the current modal reference
    this.currentModalRef = dialogRef;

    // Notify subscribers about the opened modal
    this.modalSubject.next(dialogRef);

    // Return an observable for component to subscribe to modal close event
    return dialogRef.afterClosed();
  }

  closeModal(): void {
    if (this.currentModalRef) {
      this.currentModalRef.close();
      this.currentModalRef = null;
    }
  }

  getModalSubscription(): Observable<MatDialogRef<any>> {
    return this.modalSubject.asObservable();
  }
}
