import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
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

