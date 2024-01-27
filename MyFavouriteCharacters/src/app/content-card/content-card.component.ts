import { Component,Input, OnInit } from '@angular/core';
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
    imgURL: "https://www.gettyimages.ca/photos/alex-trebek-jeopardy",
    creator: '',
    type:'',
    tags: []
  });

  this.contentList=new ContentList
  this.contentList.addItem({
    id: 2,
    title: 'new title',
    description: 'This is the body of the content',
    imgURL: 'https://www.gettyimages.ca/photos/alex-trebek-jeopardy',
    creator: '',
    type:'',
    tags: []
  });
  this.contentList=new ContentList
  this.contentList.addItem({
    id: 3,
    title: 'new title',
    description: 'This is the body of the content',
    imgURL: 'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A=',
    creator: '',
    type:'',
    tags: []
  });
}
ngOnInit() {
  
}
}