import { Content } from './content-interface';


export class ContentList{
getContentDetails(_t6: any) {
throw new Error('Method not implemented.');
}
   private contentArray:Content[]

    
   constructor() {
        this.contentArray=[];
   }       
     get getContentArray() {
           return this.contentArray
          }
        
          addItem(i:Content){
            this.contentArray.push(i);
          }

          getContentHTML(i:number):string{
            let item:Content = this.contentArray[i];
            return'<p>' + item.title + item.description + item.type + '</p>' + item.id + item.creator +  '<img src="' + item.imgURL + '"></img>'
          }

    }
