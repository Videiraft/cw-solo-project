import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from '../api-client.service';

import { Link } from '../link';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {

  @Input()
  links: Link[];

  @Input()
  type: string;

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
  }

}
