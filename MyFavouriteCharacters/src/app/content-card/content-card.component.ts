import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {

contentList: ContentList;

constructor()
{
  this.contentList=new ContentList
  this.contentList.addItem({
    id: 1,
    title: 'new title',
    description: 'This is the body of the content',
    imgURL: "C:\Users\drist\Desktop\Winter_2024\Web_601_Javascript\sherlock1.jpg",
    creator: '',
    type:'',
    tags: []
  });

  this.contentList=new ContentList
  this.contentList.addItem({
    id: 2,
    title: 'new title',
    description: 'This is the body of the content',
    imgURL: '',
    creator: '',
    type:'',
    tags: []
  });
  this.contentList=new ContentList
  this.contentList.addItem({
    id: 3,
    title: 'new title',
    description: 'This is the body of the content',
    imgURL: '',
    creator: '',
    type:'',
    tags: []
  });
}
ngOnInit() {
  
}
}