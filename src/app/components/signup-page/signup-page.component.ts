import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  handleSignup () {
    this.auth.signup(this.email, this.password)
      .pipe(
        switchMap((res) => {
          if (res.status === 'success') return this.auth.login(this.email, this.password);
        })
      ).subscribe((loginRes) => {
        this.auth.setSession(loginRes.data.id_token, this.email);
        this.router.navigateByUrl('/dashboard');
      })
  }
}
