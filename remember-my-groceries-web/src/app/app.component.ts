import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailVerificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'remember-my-groceries-web';
}
