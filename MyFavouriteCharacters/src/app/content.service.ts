import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private newContentSubject = new BehaviorSubject<any>(null);

  constructor() { }

  sendNewContent(content: any): void {
    this.newContentSubject.next(content);
  }

  getNewContentObservable() {
    return this.newContentSubject.asObservable();
  }
}
