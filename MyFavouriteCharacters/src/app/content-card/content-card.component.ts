import { Component,Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
//import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
});

// export class ContentCardComponent implements OnInit {

// contentList: content-list = new ContentList();

// constructor()
// {
//   this.contentList=new ContentList
//   this.contentList.addItem({
//     id: 1,
//     title: 'new title',
//     description: 'This is the body of the content',
//     imgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.podbean.com%2Fpodcast-detail%2Fpq68z-34268%2FThe-Adventures-of-Sherlock-Holmes-by-Sir-Arthur-Conan-Doyle-Podcast&psig=AOvVaw1N9iBovAnJhao2Ox1mjBPo&ust=1706479298642000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiivPfI_oMDFQAAAAAdAAAAABAJ'    ",
//     creator: 'Arthur Conan Doyle',
//     type:'',
//     tags: []
//   });

//   this.contentList=new ContentList
//   this.contentList.addItem({
//     id: 2,
//     title: 'new title',
//     description: 'This is the body of the content',
//     imgURL: 'https://www.gettyimages.ca/photos/alex-trebek-jeopardy',
//     creator: '',
//     type:'',
//     tags: []
//   });
//   this.contentList=new ContentList
//   this.contentList.addItem({
//     id: 3,
//     title: 'Sherlok Holms',
//     description: 'A brilliant London-based detective, Holmes is famous for his prowess at using logic and astute observation to solve cases.',
//     imgURL:'\Users\drist\Pictures\Saved Pictures\bear.png',
//     creator: 'Arthur Conan Doyle',
//     type:'',
//     tags: []
//   });
// }
// ngOnInit(): void {
  
// }
// }