import { Component, Output, EventEmitter ,OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HoverAffectDirective} from '../hover-affect.directive';
import { ContentService } from '../content.service';


@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule, HoverAffectDirective],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

   @Output() contentAdded = new EventEmitter<Content>();

  content: Content = {} as Content;
  errorMessage!: string;
  successMessage!: string;
  tagInput!: string;

  
   submitContent(): Promise<string> {
   //Creates a new instance (Promise)
     return new Promise((resolve, reject) =>{
    if (!this.isValidContent(this.content)) {
       //If it is not valid: display error message
       this.errorMessage = 'Id, Title, Description, Creator fields are required';
       reject(this.errorMessage);
      } else {
        this.content.tags = this.tagInput ? this.tagInput.split(',').map(tag => tag.trim()) : [];
        this.contentAdded.emit(this.content);
       this.clearFields();
       this.successMessage = "Content was added successfully";
       resolve(this.successMessage);
     }
     });
   }

  //clears the fields/error message after emitting an event
   clearFields() {
     this.content = {} as Content;
     this.errorMessage = '';
     this.tagInput = '';
   }

 // Validates the content, takes the 'Content' as a param & return a boolean
 // Checks all the if all the required fields are present
   isValidContent(content: Content): boolean {
     return !!content.id && !!content.title && !!content.description && !!content.creator;
  }
  
 }
