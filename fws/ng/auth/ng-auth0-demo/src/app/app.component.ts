import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginButtonComponent,
    LogoutButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-auth0-demo';
}
