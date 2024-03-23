import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';




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
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }  
}