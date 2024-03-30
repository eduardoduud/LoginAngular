import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  SingleStateMediator,
  SingleStateType
} from '../../mediators/single-state.mediator';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SyncWidthDirective } from '../../directives/sync-width.directive';

@Component({
  selector: 'login-app-dropdown',
  templateUrl: 'dropdown.component.html',
  standalone: true,
  imports: [
    ButtonComponent,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    NgForOf,
    ClickOutsideDirective,
    ReactiveFormsModule,
    NgClass,
    SyncWidthDirective,
    NgIf
  ]
})
export class DropdownComponent {
  @Input() options?: Array<string>;
  @Input() fieldName?: string;
  @Input() isErrorMessageVisible?: boolean;
  @Output() selectedOptionChange = new EventEmitter<string>();

  protected dropdownWidth?: number;

  selectedOption?: string;
  isVisible = false;

  constructor(private singleStateMediator: SingleStateMediator) {}

  updateSelectedOption(option: string): void {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
  }
  toggleOptionsVisibility(): void {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.singleStateMediator.capture(SingleStateType.FloatElement, this);
    } else {
      this.singleStateMediator.release(SingleStateType.FloatElement);
    }
  }

  reset(): void {
    this.isVisible = false;
    this.singleStateMediator.release(SingleStateType.FloatElement);
  }
}
