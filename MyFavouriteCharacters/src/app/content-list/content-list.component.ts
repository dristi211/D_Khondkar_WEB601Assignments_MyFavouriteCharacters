import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentTypeFilterPipePipe } from '../content-type-filter-pipe.pipe';
import { catchError, of, retry } from 'rxjs';
import { ContentService } from '../content.service';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, ContentTypeFilterPipePipe, ModifyContentComponentComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
//declares property contentArray of type 'Content[]' (initialize it as empty)
  contentArray: Content[] = [];
  filterContent: Content[]= [];
  title:string='';
  message:string='';
  isFound:boolean = false;

  onContentAdded(newContent: Content) {
    console.log('New content:', newContent);
    this.contentArray = [...this.contentArray, newContent];
    if(newContent){
      console.log(`Success ${newContent.title}`);
    }
  }
 
//injectable contentService of type ContentService into component

  constructor(private contentService:ContentService){}
 
  checkTitle() {
    if(!this.title) {
      this.message = "Title is not provided";
      return;
    }
  
   // Filter content array by title (case-insensitive)
   this.filterContent = this.contentArray.filter((item: { title: string; }) => 
    item && item.title && item.title.toLowerCase() === this.title.toLowerCase()
   );
     // Check if any content is found
     this.isFound = this.filterContent.length > 0;
  
     // Set message based on search result
     this.message = this.isFound 
       ? `Content with title '${this.title}' found.` 
       : `Content with title '${this.title}' not found.`;
  }
 
   //fetches the contentArray from ContentService
   getContent(): void {
     //invokes method from ContentService, returns an Observable that outputs a  Content[] array 
     //pipe - chains RxJS operators (handles the error)
     //invokes method from ContentService, returns an Observable that outputs a  Content[] array 
     //pipe - chains RxJS operators (handles the error)
     this.contentService['getContentArray']().pipe(
       //catches any errors that occur during the HTTP request/processing of the observable 
         catchError(error => {
           console.error('Error fetching content:', error);
           //return empty array if there's an error
           return of([]); 
         })
       )
       //subscribe - is called on the observable stream, 
       //receives the content array from the observable (the original content array or am empty array)
       //inside the callback function - the content array is assigned to the contentArray property of the component
       .subscribe((content: Content[]) => {
         this.contentArray = content;
       })
   }
 
   //getContent ^^ is invoked, initiating the fetching of the content from the ContentService
   ngOnInit(): void {
     this.getContent();
   
  }
}
