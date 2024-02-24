import { Component, Input, NgModule } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe';
import {HoverAffectDirective} from '../hover-affect.directive'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, ContentTypeFilterPipePipe, HoverAffectDirective, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
//[x: string]: any;



contentArray: Content[]  = [
    { id: 1, title: 'The Hound of the Baskervilles', year:1902, ISBN:12.4500, description: 'In this, one of the most famous of Doyles mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. ' , creator: 'Arthur Conan Doyle', type: 'detective fiction', imageUrl:'https://angular.io/assets/images/logos/angular/angular.png', tags:['Detective','Suspense','Thriller'] },
    { id: 2, title: 'His Last Bow',  year:1917, ISBN: 12.45, description: 'Holmes disguises himself as an informant against the British. He meets up with a German agent to provide some top-secret information, but overtakes him with chloroform. I' , creator: 'Arthur Conan Doyle', type: 'Thriller', imageUrl:'https://angular.io/assets/images/logos/angular/angular.png', tags:['Detective','Suspense','Thriller'] },
    { id: 3, title: 'The Valley of Fear', year:1915, ISBN: 12.45, description: 'The Valley of Fear is a story about a mysterious murder in Birlstone, beautiful countryside in England' , creator: 'Arthur Conan Doyle', type: 'Suspense', imageUrl:'', tags:['Detective','Suspense','Thriller'] },
    { id: 4, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', imageUrl:'https://angular.io/assets/images/logos/angular/angular.png', tags:['Detective','Suspense','Thriller'] },
    { id: 5, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', imageUrl:'', tags:['Detective','Suspense','Thriller'] },
    { id: 6, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', imageUrl:'', tags:['Detective','Suspense','Thriller'] },
    { id: 7, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', imageUrl:'', tags:['Detective','Suspense','Thriller'] },
    
  ];

// searchTitle: string='';
// searchResult:Content []=[];
// highlightedContentIndex: number | null = null;
// string: string | any;
// contentItems: string | undefined;
// contents!: Content[];
// titleCheck:any;

//   searchContent(title:string) {
//     this.searchResult = this.contentArray.filter((contentArray: { title: string; }) => contentArray.title === title);
//     if (this.searchResult.length>0) {
//       alert('found');
//       this.highlightedContentIndex = this.contentArray.findIndex((contentArray: { title: string; }) => contentArray.title === title);
//     } else {
//       alert('not found');
//       this.highlightedContentIndex = null;
//     }
//   }
// }
filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;
searchContent: any;
searchTitle: any;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(){

  }
}

 





  

