import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
displayContentDetails(_t3: any) {
throw new Error('Method not implemented.');
}
  contentArray = [
    { id: 1, title: 'Content 1', description: 'This is description 1', imageURL:'', creator:'creator 1', type: 'type1', tags: 'tag1'},
    { id: 2, title: 'Content 2', description: 'This is description 2', imageURL:'', creator:'creator 2', type: 'type2', tags: 'tag2' },
    { id: 3, title: 'Content 3', description: 'This is description 3', imageURL:'', creator:'creator 3',  type: 'type3',  tags: 'tag3'},
    { id: 4, title: 'Content 4', description: 'This is description 4', imageURL:'', creator:'creator 4',  type: 'type4',  tags: 'tag4'},
    { id: 5, title: 'Content 5', description: 'This is description 5', imageURL:'', creator:'creator 5',  type: 'type5',  tags: 'tag5'},
    { id: 6, title: 'Content 6', description: 'This is description 6', imageURL:'', creator:'creator 6',  type: 'type6',  tags: 'tag6'}
  ];
}
