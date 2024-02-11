import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe';



@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, ContentTypeFilterPipePipe],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
[x: string]: any;

  contents: Content[] = [
    { id: 1, title: 'The Hound of the Baskervilles', year:1902, ISBN:12.4500, description: 'In this, one of the most famous of Doyles mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. ' , creator: 'Arthur Conan Doyle', type: 'detective fiction', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stockvault.net%2F&psig=AOvVaw2k1FdYNLpvtTiPjaP0yPJ-&ust=1707604723276000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjEk76pn4QDFQAAAAAdAAAAABAI',tags:[] },
    { id: 2, title: 'His Last Bow',  year:1917, ISBN: 12.45, description: 'Holmes disguises himself as an informant against the British. He meets up with a German agent to provide some top-secret information, but overtakes him with chloroform. I' , creator: 'Arthur Conan Doyle', type: 'detective fiction', imageUrl:'', tags:[] },
    { id: 3, title: 'The Valley of Fear', year:1915, ISBN: 12.45, description: 'The Valley of Fear is a story about a mysterious murder in Birlstone, beautiful countryside in England' , creator: 'Arthur Conan Doyle', type: 'detective fiction', imageUrl:'', tags:[] },
    { id: 4, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', type: 'detective fiction', imageUrl:'', tags:[] },
   
  ];
  searchTitle: string = '';
  searchResult: boolean | null = null;
  highlightedContentIndex: number | null = null;
string: string | undefined;
contentItems: any;

  searchContent() {
    this.searchResult = this.contents.some(content => content.title === this.searchTitle);
    if (this.searchResult) {
      this.highlightedContentIndex = this.contents.findIndex(content => content.title === this.searchTitle);
    } else {
      this.highlightedContentIndex = null;
    }
  }
}

  

