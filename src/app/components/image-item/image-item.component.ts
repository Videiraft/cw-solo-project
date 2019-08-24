import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { Link } from '../../models/link';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {
  @Input()
  link: Link;

  @Output()
  public deleteLink: EventEmitter<string> = new EventEmitter<string>();

  constructor(private apiClientService: ApiClientService) { }

  handleDeleteLink () {
    this.apiClientService.deleteLink(this.link._id)
      .subscribe(res => {
        if (!res.data) this.deleteLink.emit(this.link._id);
      });
  }

}
