import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login (email: string, password: string): Observable<{id_token:string}> {
    console.log('Trying to Login');
    const authBase64: string = 'Basic ' + btoa(email + ':' + password);
    const headers = new HttpHeaders({'Authorization': authBase64 });
    return this.http.get<{id_token:string}>(
      environment.baseURL + '/users/login', 
      { headers },
    );
  }

  public setSession (authToken):void {
    console.log('setting Session');
    localStorage.setItem('id_token', authToken);
  }
  
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    return token ? true : false;
    // TODO: expiration
    // return tokenNotExpired(token);
  }

}
