import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipePipe } from "./content-type-filter-pipe.pipe";
import { ContentCardComponent } from "./content-card/content-card.component";
import { catchError, filter, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ContentService } from './content.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ContentTypeFilterPipePipe, ContentCardComponent, CommonModule, ContentListComponent, FormsModule, MessagesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})

export class AppComponent implements OnInit {

  title = 'My Favorite Characters';

  //declare property custom content of type 'Content' or undefined
  customContent: Content | undefined;

  //injecting MovieService
  constructor(private bookService: ContentService) {}

  ngOnInit(): void {
    //choose ID
    this.getContentById(1); 
  }

  //fetches content by id using movieservice
  getContentById(id: number): void {
    //invokes method from MovieService, returns an Observable that outputs a movie Content based on its id 
    //invokes method from MovieService, returns an Observable that outputs a movie Content based on its id 
    this.bookService['getContentById'](id)
      .pipe(
        //tap - performing side-effects (updates) without modifying the value
        //sets customContent to the fetched content based on id
        tap((content: Content | undefined) => {
          this.customContent = content;
        }),
        catchError((error) => {
          console.error('Error fetching content by ID:', error);
          //returns an observable null value 
          return of(null); 
        })
      )
      //initiates the observable chain and start retrieving the data
      .subscribe();
  }
}






//   [x: string]: any;
//   ngOnInit(): void {
//     const idNumberHere = 222;
//     this['bookContentService'].getContentById(idNumberHere).subscribe((content: any) => {
//       this.singleContentItm = content;
//     })
//   }
//   singleContentItm: any;
  
// //[x: string]: any;
//   title = 'D_Khondkar_MyFavouriteCharacters_Sherlok Holmes';
//   id =1;
//   description = 'Sherlock Holmes is a fictional detective of the late 19th and early 20th centuries, who first appeared in publication in 1887. He was devised by British author and physician Sir Arthur Conan Doyle';
//   creator = 'Arthur Conan Doyle';
//   type = 'fictional detective';
//   imgURL ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.podbean.com%2Fpodcast-detail%2Fpq68z-34268%2FThe-Adventures-of-Sherlock-Holmes-by-Sir-Arthur-Conan-Doyle-Podcast&psig=AOvVaw1N9iBovAnJhao2Ox1mjBPo&ust=1706479298642000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiivPfI_oMDFQAAAAAdAAAAABAJ';
// onClickMe: any;

// }


