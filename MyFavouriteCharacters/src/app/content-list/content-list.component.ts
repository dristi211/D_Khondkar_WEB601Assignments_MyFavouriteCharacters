import { Component, Input, NgModule } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentTypeFilterPipePipe } from '../content-type-filter-pipe.pipe';
import { HoverAffectDirective } from '../hover-affect.directive'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, ContentTypeFilterPipePipe, HoverAffectDirective, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

contentArray: Content[]  = [
    { id: 1, title: 'The Hound of the Baskervilles', year:1902, ISBN:12.4500, description:'In this, one of the most famous of Doyles mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. ' , creator: 'Arthur Conan Doyle', type:'detective fiction', imageUrl:'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600', tags:['Detective','Suspense','Thriller'] },
    { id: 2, title: 'His Last Bow', year:1917, ISBN: 12.45, description:'Holmes disguises himself as an informant against the British. He meets up with a German agent to provide some top-secret information, but overtakes him with chloroform. I' , creator:'Arthur Conan Doyle', type:'Thriller', imageUrl:'https://pixabay.com/images/search/suspense/', tags:['Detective','Suspense','Thriller'] },
    { id: 3, title: 'The Valley of Fear', year:1915, ISBN: 12.45, description:'The Valley of Fear is a story about a mysterious murder in Birlstone, beautiful countryside in England' , creator:'Arthur Conan Doyle', type:'Suspense', imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', tags:['Detective','Suspense','Thriller'] },
    { id: 4, title: 'The Return of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Return of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'data:image/jpeg;base64,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', tags:['Detective','Suspense','Thriller'] },
    { id: 5, title: 'The Adventure of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Adventure of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg', tags:['Detective','Suspense','Thriller'] },
    { id: 6, title: 'The Case-Book of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Case-Book of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags:['Detective','Suspense','Thriller'] },
    { id: 7, title: 'The Complete Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Complete Sherlok Holmes is the collections of novels by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600', tags:['Detective','Suspense','Thriller'] },
    { id: 8, title: 'The Complete Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Complete Sherlok Holmes is the collections of novels by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpghttps://pixabay.com/images/search/suspense/', tags:['Detective','Suspense','Thriller'] },
  ];


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
/* // searchTitle: string='';
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
// } */
 





  

