import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../link';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
  }

}
