import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  baseURL: string =  'http://127.0.0.1:4000';

  constructor(public http: HttpClient) { }

  getAllLinks (): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.baseURL}/users/links`);
  }

}
