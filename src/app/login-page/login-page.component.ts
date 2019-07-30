import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;

  constructor (private auth: AuthService, private router: Router) { }

  ngOnInit () { }

  handleLogin () {
    this.auth.login(
      this.email,
      this.password
    ).subscribe(
      res => {
        if (res.id_token) {
          this.auth.setSession(res.id_token, this.email);
          this.router.navigateByUrl('/dashboard');
        }
      });
  }
}
