import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginComponent } from './ui/external/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { RoutePaths } from './route-paths';
import { HeaderComponent } from './ui/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'login-root',
  templateUrl: './app.component.html',
  imports: [LoginComponent, MatDialogModule, RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'login app';
  constructor(
    private titleService: Title,
    private router: Router,
  ) {
    this.titleService.setTitle(this.title);
    router.navigate([`/${RoutePaths.Default}`]);
  }
}
