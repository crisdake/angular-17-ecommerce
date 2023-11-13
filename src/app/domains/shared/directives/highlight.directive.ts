import { Directive, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
   element = inject(ElementRef)

  constructor() { }
  ngOninit(){
    this.element.nativeElement.style.backgroundColor = "red"
  }
}
