import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ApiClientService } from '../../services/api-client.service';

import { Link } from '../../link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: string = '';
  videos: Link[] = [];
  articles: Link[] = [];
  images: Link[] = [];
  tags: string[] = [];

  constructor(private auth: AuthService, private apiClientService: ApiClientService) { }

  ngOnInit() {
    const email: string = localStorage.getItem('email');
    this.user = email.charAt(0).toUpperCase() + email.slice(1, email.indexOf('@'));
    this.apiClientService.getAllLinks()
      .subscribe(res => {
        res.data.links.forEach((link) => {
          this[link.typeLink + 's'].push(link);
        });
      });
  }

  onAddTag (tag) {
    if (tag === 'ALL') {
      this.tags = [];
    } else {
      const newArr = [...this.tags];
      newArr.push(tag);
      this.tags = newArr;
    }
  }

  logOut () {
    this.auth.deleteToken();
  }

}
