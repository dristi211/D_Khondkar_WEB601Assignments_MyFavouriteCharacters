import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    //setting it to the value of our array of content
    const content = [
      { id: 1, title: 'The Hound of the Baskervilles', year:1902, ISBN:12.4500, description:'In this, one of the most famous of Doyles mysteries, the tale of an ancient curse and a savage ghostly hound comes frighteningly to life. ' , creator: 'Arthur Conan Doyle', type:'detective fiction', imageUrl:'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600', tags:['Detective','Suspense','Thriller'] },
      { id: 2, title: 'His Last Bow', year:1917, ISBN: 12.45, description:'Holmes disguises himself as an informant against the British. He meets up with a German agent to provide some top-secret information, but overtakes him with chloroform. I' , creator:'Arthur Conan Doyle', type:'Thriller', imageUrl:'https://pixabay.com/images/search/suspense/', tags:['Detective','Suspense','Thriller'] },
      { id: 3, title: 'The Valley of Fear', year:1915, ISBN: 12.45, description:'The Valley of Fear is a story about a mysterious murder in Birlstone, beautiful countryside in England' , creator:'Arthur Conan Doyle', type:'Suspense', imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', tags:['Detective','Suspense','Thriller'] },
      { id: 4, title: 'The Return of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Return of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'', tags:['Detective','Suspense','Thriller'] },
      { id: 5, title: 'The Adventure of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Adventure of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg', tags:['Detective','Suspense','Thriller'] },
      { id: 6, title: 'The Case-Book of Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Case-Book of Sherlok Holmes by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags:['Detective','Suspense','Thriller'] },
      { id: 7, title: 'The Complete Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Complete Sherlok Holmes is the collections of novels by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600', tags:['Detective','Suspense','Thriller'] },
      { id: 8, title: 'The Complete Sherlok Holmes', year:1890, ISBN: 12.45, description:'The Complete Sherlok Holmes is the collections of novels by Arthur Conan Doyle about master detective Sherlock Holmes and his partner Dr John Watson' , creator:'Arthur Conan Doyle', imageUrl:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpghttps://pixabay.com/images/search/suspense/', tags:['Detective','Suspense','Thriller'] },
    ];
    return {content};
  }

  //take the CONTENT we defined in our contentDb file previously and move the values to this service
  genId(content: Content[]): number{
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 1;
  }

  constructor() { }

}