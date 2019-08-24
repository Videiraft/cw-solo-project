import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { LinksResponse, TagsResponse, DeleteLinkResponse } from '../models/interfaces-api'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  bearer: string = 'Bearer ' + this.auth.getToken();
  headers: HttpHeaders = new HttpHeaders({'Authorization': this.bearer });
  
  constructor(public http: HttpClient, private auth: AuthService) { }

  getAllLinks (): Observable<LinksResponse> {
    return this.http.get<LinksResponse>(
      `${environment.baseURL}/users/links`,
      { headers: this.headers }
    );
  }

  getAllTags (): Observable<TagsResponse> {
    return this.http.get<TagsResponse>(
      `${environment.baseURL}/users/links/tags`,
      { headers: this.headers }
    );
  }

  deleteLink (linkId): Observable<DeleteLinkResponse> {
    return this.http.delete<DeleteLinkResponse>(
      `${environment.baseURL}/users/links/${linkId}`,
      { headers: this.headers }
    );
  }

}
