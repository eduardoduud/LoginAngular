import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'login-app-button',
  standalone: true,
  imports: [NgIf, NgClass, IconComponent],
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() type?: string;
  @Input() isDisabled = false;
  @Input() isIconLeft = false;
  @Input() isIconRight = false;
  @Input() isBackgroundTransparent = false;
  @Input({ required: true }) design: string =
    'primary' || 'secondary' || 'tertiary';
  @Input() icon = '';
  @Input() text = '';
  @Input() textSize = '';

  @Output() clicked = new EventEmitter<Event>();

  protected isPrimary = false;
  protected isSecondary = false;
  protected isTertiary = false;

  ngOnInit(): void {
    if (this.icon && !this.text) {
      throw new Error('Buttons with icons must contain text.');
    }
    this.design = this.design || 'primary';
    this.isDisabled = this.isDisabled || false;
    this.isIconLeft = this.isIconLeft || false;
    this.isIconRight = this.isIconRight || false;

    this.isPrimary = this.design.toLowerCase() === 'primary' || false;
    this.isSecondary = this.design.toLowerCase() === 'secondary' || false;
    this.isTertiary = this.design.toLowerCase() === 'tertiary' || false;
  }

  onClicked(event: Event): void {
    if (!this.isDisabled) {
      this.clicked.emit(event);
      event.stopPropagation();
    }
  }
}
