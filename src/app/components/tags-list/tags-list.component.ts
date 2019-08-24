import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {

  @Output()
  public addTag: EventEmitter<String> = new EventEmitter<String>();

  tags: string[] = [];

  @Input()
  selectedTags: string[] = [];

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.apiClientService.getAllTags()
      .subscribe((res) => {
        this.tags = res.data.tags.sort();
      });
  }

  handleClickTag (event) {
    this.addTag.emit(event.target.innerText);
  }

}
