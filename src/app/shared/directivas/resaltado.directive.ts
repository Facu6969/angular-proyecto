import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {
  @Input()
  color = 'red';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

}
