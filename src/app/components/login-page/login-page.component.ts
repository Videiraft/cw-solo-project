import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string;
  password: string;

  constructor (private auth: AuthService, private router: Router) { }

  handleLogin () {
    this.auth.login(
      this.email,
      this.password
    ).subscribe(
      res => {
        if (res.data.id_token) {
          this.auth.setSession(res.data.id_token, this.email);
          this.router.navigateByUrl('/dashboard');
        }
      });
  }
}
