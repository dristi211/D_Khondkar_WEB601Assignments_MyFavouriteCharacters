import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   constructor(private messageService: MessageService) { }

//   getContentArray(): Observable<Content[]> {
//     //adding a message to messageService
//     this.messageService.add('Content array loaded!');
//     //Retrieves the contentArray & return it using the observable pattern
//     return of(contentArray);
//   }

    //takes param/input id

  //returns an Observable, will emit a Content object or undefined
//   getContentById(id: number): Observable<Content | undefined> {
//     //Finds the matching id in the contentArray that matches the parameter id
//     //if match found  - return Content object. If not - undefined
//     const content =(contentArray.find((content: { id: number; }) => content.id === id));
//     //adds a message to messageService
//     this.messageService.add(`Content Item at id: ${id}`);
//     return of(content);

//   }
// }


@Injectable({
  providedIn: 'root'
})

export class ContentService {
  [x: string]: any;
  private contentUrl = 'api/content';

  constructor(private http: HttpClient, private message: MessageService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>(this.contentUrl);
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>(this.contentUrl, newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put(this.contentUrl, contentItem, this.httpOptions);
  }  
}