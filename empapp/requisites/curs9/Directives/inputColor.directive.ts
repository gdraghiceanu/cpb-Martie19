import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from 'requisites/curs9/directives/node_modules/@angular/core';
import { FormControl } from 'requisites/curs9/directives/node_modules/@angular/forms';

@Directive({
  selector: '[inputColor]'
})
export class InputColorDirective {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}
  @Input() inputFormControl: FormControl;

  @HostListener('mouseenter') onmouseenter() {
    this.borderHighlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.borderHighlight(false);
  }

  borderHighlight(shouldHighlight: boolean) {
    if (shouldHighlight) {
      if (this.inputFormControl.valid) {
        this.elementRef.nativeElement.style.border = '5px solid green';
      } else {
        this.elementRef.nativeElement.style.border = '5px solid red';
      }
    } else {
      this.elementRef.nativeElement.style.border = 'initial';
    }
  }
}
