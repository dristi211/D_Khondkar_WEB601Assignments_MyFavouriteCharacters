import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [ Component, Output, EventEmitter],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {


  @Output() addContent = new EventEmitter<any>();
  
  content = {
    id: '',
    title: '',
    // Add other necessary fields
  };

  submitContent() {
    // Validate input fields if needed

    // Emit the new content to the parent component
    this.addContent.emit({...this.content});
  }

}