import { Component, Input, ElementRef, Output, EventEmitter, HostListener, NgModule, input } from '@angular/core';
import { NgClass, CommonModule, NgComponentOutlet } from '@angular/common';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe'
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { NgModel, NgModelGroup } from '@angular/forms';
import { HostBinding } from '@angular/core';
import {HoverAffectDirective} from '../hover-affect.directive'

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipePipe, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  @Input()
  content!: Content;

showDetails() {
  console.log(`id: $(this.content.id}, Title: ${this.content.title})`);
  console.log('Image clicked!');
  console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);

}

//   @Input() title: string = 'MyFavouriteCharcters';
//   @Input() imageUrl: any = '';
//   @Input() description: string = 'This is a detective series';
//   @Input() creator: string = '';
//   @Input() type?: string = '';
//   @Input() tags?: string[] = [];
 

//   @Output() imageClick: EventEmitter<{ id: number, title: string }> = new EventEmitter();
// isFirst: any;
// constructor() { }

// search() {
 
//   this['searchResultExists'] = this['contents'].some((content: { title: string; }) => content.title === this['searchTitle']);
//   this['searchResultMessage'] = this['searchResultExists'] ? 'Content exists with the given title' : 'Content does not exist with the given title';

//   ;
// }
//   onClick() {
//     this.imageClick.emit({ id: 1, title: this.title });
//   }

//     contents: Content[];
//     types!: string[];
//     searchTitle!: string;
//     searchResultExists!: boolean;
//     searchResultMessage!: string;
  
   
  
//     searchContent() {
//       const contentExists = this.contents.some(content => content.title === this.searchTitle);
//       this.searchResultExists = contentExists;
//       this.searchResultMessage = contentExists ? 'Content exists' : 'Content does not exist';
//     }
//   }




//   function ngOnInit() {
//     throw new Error('Function not implemented.');
//   }

  // @Component({
  //   selector: 'keyvalue-pipe',
  //   template: `<span>
  //     <p>Object</p>
  //     <div *ngFor="let item of object | keyvalue">{{ item.key }}:{{ item.value }}</div>
  //     <p>Map</p>
  //     <div *ngFor="let item of map | keyvalue">{{ item.key }}:{{ item.value }}</div>
  //   </span>`,
  // })
  // export class KeyValuePipeComponent {
  //   object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  //   map = new Map([
  //     [2, 'foo'],
  //     [1, 'bar'],
  //   ]);
   }