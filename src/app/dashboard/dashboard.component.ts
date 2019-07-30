import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiClientService } from '../api-client.service';

import { Link } from '../link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  videos: Link[] = [];
  articles: Link[] = [];
  images: Link[] = [];

  constructor(private auth: AuthService, private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.apiClientService.getAllLinks()
      .subscribe(links => {
        links.forEach((link) => {
          this[link.typeLink + 's'].push(link);
        });
        console.log(this.videos);
        console.log(this.articles);
      });
  }

  logOut () {
    this.auth.deleteToken();
  }

}
