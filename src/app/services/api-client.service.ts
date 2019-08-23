import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { LinksResponse, TagsResponse } from '../models/interfaces-api'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(public http: HttpClient, private auth: AuthService) { }

  getAllLinks (): Observable<LinksResponse> {
    const bearer = 'Bearer ' + this.auth.getToken();
    const headers = new HttpHeaders({'Authorization': bearer });
    return this.http.get<LinksResponse>(
      `${environment.baseURL}/users/links`,
      { headers }
    );
  }

  getAllTags (): Observable<TagsResponse> {
    const bearer = 'Bearer ' + this.auth.getToken();
    const headers = new HttpHeaders({'Authorization': bearer });
    return this.http.get<TagsResponse>(
      `${environment.baseURL}/users/links/tags`,
      { headers }
    );
  }

}
