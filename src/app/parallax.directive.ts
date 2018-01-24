import { Directive, ViewChild, ElementRef, HostListener } from '@angular/core';
// import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
import { ViewChild } from '@angular/core/src/metadata/di';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @ViewChild('logo') logoHolder;

  constructor(public el: ElementRef) {
    console.log(el.nativeElement);
  }

  // window scroll listener
  @HostListener('window:scroll', ['$event']) checkWindowScroll() {
    const componentPos = this.el.nativeElement.offsetTop;
    const scrollPos = window.scrollY;

    if (scrollPos >= componentPos) {
      console.log(scrollPos);
    }
  }
}
