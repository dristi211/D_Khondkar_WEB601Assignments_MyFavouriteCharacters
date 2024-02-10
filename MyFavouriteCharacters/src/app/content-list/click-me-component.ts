import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { CommonModule } from '@angular/common';


@Component({
    standalone: true,
    selector: 'app-click-me',
    imports: [CommonModule,ClickMeComponent],
    template: ` <button type="button" (click)="onClickMe()">Click me!</button>
      {{ clickMessage }}`,
  })
  export class ClickMeComponent {
    clickMessage = '';
  
    onClickMe() {
      this.clickMessage = '';
    }
  }
  