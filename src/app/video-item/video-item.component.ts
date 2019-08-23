import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Link } from '../link';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input()
  link: Link;
  url: any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    const link: string = this.link.url.replace('watch?v=', 'embed/');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

}
