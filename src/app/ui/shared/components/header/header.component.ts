import { Component } from '@angular/core';
import { TopHeaderComponent } from './headerTop/top.header.component';
import { MenuHeaderComponent } from './headerMenu/menu.header.component';

@Component({
  selector: 'login-app-header',
  standalone: true,
  imports: [TopHeaderComponent, MenuHeaderComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {}
