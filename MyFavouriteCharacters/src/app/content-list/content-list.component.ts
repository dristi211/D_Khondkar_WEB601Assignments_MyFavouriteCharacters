import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {

  contentItems = [
    { id: 1, title: 'Content 1', image: 'image1.jpg', description: 'Description 1', creator: 'Creator 1', type: 'Type 1', tags: ['Tag1', 'Tag2'] },
    // Add more content items as needed
  ];

  onImageClick(content: any) {
    console.log(`Clicked on Content - ID: ${content.id}, Title: ${content.title}`);
  }
}


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
  

