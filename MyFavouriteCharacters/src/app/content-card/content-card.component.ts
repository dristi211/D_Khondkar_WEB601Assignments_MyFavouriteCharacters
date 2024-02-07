import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() title: string = 'MyFavouriteCharcters';
  @Input() image: string = '';
  @Input() description: string = 'This is a detective series';
  @Input() creator: string = '';
  @Input() type: string = '';
  @Input() tags: string[] = [];

  @Output() imageClick: EventEmitter<{ id: number, title: string }> = new EventEmitter();
isFirst: any;

  onClick() {
    this.imageClick.emit({ id: 1, title: this.title });
  }
}



  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

