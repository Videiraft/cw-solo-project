import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiClientService } from '../../services/api-client.service';
import { Link } from '../../models/link';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input()
  link: Link;
  url: any;

  @Output()
  public deleteLink: EventEmitter<string> = new EventEmitter<string>();

  constructor(private sanitizer:DomSanitizer, private apiClientService: ApiClientService) { }

  ngOnInit() {
    const link: string = this.link.url.replace('watch?v=', 'embed/');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  handleDeleteLink () {
    this.apiClientService.deleteLink(this.link._id)
      .subscribe(res => {
        if (!res.data) this.deleteLink.emit(this.link._id);
      });
  }
}
