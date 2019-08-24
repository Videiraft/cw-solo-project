import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { Link } from '../../models/link';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  
  @Input()
  link: Link;

  @Output()
  public deleteLink: EventEmitter<string> = new EventEmitter<string>();

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
  }

  handleDeleteLink () {
    this.apiClientService.deleteLink(this.link._id)
      .subscribe(res => {
        if (!res.data) this.deleteLink.emit(this.link._id);
      });
  }
}
