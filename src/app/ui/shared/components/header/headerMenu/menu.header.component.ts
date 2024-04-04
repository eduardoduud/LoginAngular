import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'login-app-menuHeader',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './menu.header.component.html'
})
export class MenuHeaderComponent {}
