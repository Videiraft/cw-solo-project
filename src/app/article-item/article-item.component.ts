import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';
import { link } from 'fs';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  
  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
  }

}
