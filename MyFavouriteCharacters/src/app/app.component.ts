import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './helper-files/content-interface';
import { ContentCardComponent } from './content-card/content-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    //imports: [RouterOutlet, ContentCardComponent]
})
  

  

export class AppComponent {
  title = 'D_Khondkar_MyFavouriteCharacters_Sherlok Holmes';
  id =1;
  description = 'Sherlock Holmes is a fictional detective of the late 19th and early 20th centuries, who first appeared in publication in 1887. He was devised by British author and physician Sir Arthur Conan Doyle';
  creator = 'Arthur Conan Doyle';
  type = 'fictional detective';
  imgURL ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.podbean.com%2Fpodcast-detail%2Fpq68z-34268%2FThe-Adventures-of-Sherlock-Holmes-by-Sir-Arthur-Conan-Doyle-Podcast&psig=AOvVaw1N9iBovAnJhao2Ox1mjBPo&ust=1706479298642000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiivPfI_oMDFQAAAAAdAAAAABAJ';

}



