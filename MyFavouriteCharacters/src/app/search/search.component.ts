import { Component, Input, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ SearchComponent, FormsModule],
  templateUrl: './search.component.html',
  template: `
    <input #box (keyup)="(0)" />
    <p>{{ box.value }}</p>
  `,
  //styleUrls: ['./search.component.css']
})

export class SearchComponent {
  [x: string]: any;
  searchQuery: string = '';

  constructor() { }

  search() {
   
    this['searchResultExists'] = this['contents'].some((content: { title: any; }) => content.title === this['searchTitle']);
    this['searchResultMessage'] = this['searchResultExists'] ? 'Content exists with the given title' : 'Content does not exist with the given title';
  
    ;
  }
}

