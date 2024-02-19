import { Component, Input, Output, EventEmitter, HostListener, NgModule } from '@angular/core';
import { NgClass, CommonModule, NgComponentOutlet } from '@angular/common';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe'
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipePipe],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
[x: string]: any;
  @Input() title: string = 'MyFavouriteCharcters';
  @Input() image: string = '';
  @Input() description: string = 'This is a detective series';
  @Input() creator: string = '';
  @Input() type: string = '';
  @Input() tags: string[] = [];

  @Output() imageClick: EventEmitter<{ id: number, title: string }> = new EventEmitter();
isFirst: any;
constructor() { }

search() {
 
  this['searchResultExists'] = this['contents'].some((content: { title: any; }) => content.title === this['searchTitle']);
  this['searchResultMessage'] = this['searchResultExists'] ? 'Content exists with the given title' : 'Content does not exist with the given title';

  ;
}
  onClick() {
    this.imageClick.emit({ id: 1, title: this.title });
  }

    contents!: Content[];
    types!: string[];
    searchTitle!: string;
    searchResultExists!: boolean;
    searchResultMessage!: string;
  
   
  
    searchContent() {
      const contentExists = this.contents.some(content => content.title === this.searchTitle);
      this.searchResultExists = contentExists;
      this.searchResultMessage = contentExists ? 'Content exists' : 'Content does not exist';
    }
  }




  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

  