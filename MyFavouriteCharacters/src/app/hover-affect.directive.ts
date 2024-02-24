import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})

export class HoverAffectDirective {

  @HostBinding('style.textDecoration')
  textDecoration!: string;
  @HostBinding('style.fontWeight')
  fontWeight!: string;
  @Input()
  typeStyle!: 'textDecoration';
  @Input()
  tagStyle!: 'fontWeight';

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle) {
      this.textDecoration = 'underline';
    } 
    if (this.tagStyle) {
      this.fontWeight = 'bold';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle) {
      this.textDecoration = ''; 
    }
    if (this.tagStyle) {
      this.fontWeight = 'normal'; 
    }
  }

}

//   constructor(private type: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.hover(true);
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.hover(false);
//   }

//   private hover(shouldUnderline: boolean) {
//     if (shouldUnderline) {
//       this.type.nativeElement.style.textDecoration = 'underline';
//     } else {
//       this.type.nativeElement.style.textDecoration = 'none';
//     }
//   }
// }

