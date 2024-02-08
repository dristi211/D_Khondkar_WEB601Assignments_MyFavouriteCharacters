import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentTypeFilterPipePipe} from '../content-type-filter-pipe.pipe'

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
    { id: 1, title: 'The Hound of the Baskervilles', year:1902, ISBN: 12.4500, description: 'In this, one of the most famous of Doyles mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. ' , creator: 'Arthur Conan Doyle', type: 'detective fiction', image:'',tags:[] },
    { id: 2, title: 'His Last Bow',  year:1917, ISBN: 12.45, description: 'Holmes disguises himself as an informant against the British. He meets up with a German agent to provide some top-secret information, but overtakes him with chloroform. I' , creator: 'Arthur Conan Doyle', type: 'detective fiction', image:'', tags:[] },
    { id: 3, title: 'The Valley of Fear', year:1915, ISBN: 12.45, description: 'The Valley of Fear is a story about a mysterious murder in Birlstone, beautiful countryside in England' , creator: 'Arthur Conan Doyle', type: 'detective fiction', image:'', tags:[] },
    { id: 4, title: 'The Sign of the Four', year:1890, ISBN: 12.45, description: 'The Sign of the Four is the second novel by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator: 'Arthur Conan Doyle', type: 'detective fiction', image:'', tags:[] },
   
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
//   onImageClick(content: any) {
//     console.log(`Clicked on Content - ID: ${content.id}, Title: ${content.title}`);
//   }
// }


// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.css']
// })
// export class ContentListComponent {
// [x: string]: any;
// // [x: string]: any;
//   contentArray = [
//     // Your array of Content items here
//     // Example:
//     { id: 1, title: 'Content 1', description: 'Description 1', creator: 'Creator 1', tags: ['Tag1', 'Tag2'] },
//     // Add more Content items
//   ];
// }

//  contentList: ContentCardComponent[] = [
 
//    { id: 1, title: 'Content 1', description: 'This is description 1', creator:'creator 1', type: 'type1', tags: ['tag1','tag2']},
//     { id: 2, title: 'Content 2', description: 'This is description 2', creator:'creator 2', type: 'type2', tags: ['tag3','tag4'] },
//     { id: 3, title: 'Content 3', description: 'This is description 3', creator:'creator 3',  type: 'type3',  tags: ['tag4','tag5']},
//     { id: 4, title: 'Content 4', description: 'This is description 4', creator:'creator 4',  type: 'type4',  tags: ['tag6','tag7']},
//     { id: 5, title: 'Content 5', description: 'This is description 5', creator:'creator 5',  type: 'type5',  tags: ['tag8','tag9']},
//     { id: 6, title: 'Content 6', description: 'This is description 6', creator:'creator 6',  type: 'type6',  tags: ['tag10','tag11']}
//    ];
  

