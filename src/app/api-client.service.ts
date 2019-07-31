import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth/auth.service';
import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(public http: HttpClient, private auth: AuthService) { }

  getAllLinks (): Observable<Link[]> {
    const bearer = 'Bearer ' + this.auth.getToken();
    const headers = new HttpHeaders({'Authorization': bearer });
    return this.http.get<Link[]>(
      `${environment.baseURL}/users/links`,
      { headers }
    );
  }

  getAllTags (): Observable<string[]> {
    const bearer = 'Bearer ' + this.auth.getToken();
    const headers = new HttpHeaders({'Authorization': bearer });
    return this.http.get<string[]>(
      `${environment.baseURL}/users/links/tags`,
      { headers }
    );
  }

}
