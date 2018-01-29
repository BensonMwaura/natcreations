import { Directive, ViewChild, ElementRef, HostListener } from '@angular/core';
// import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';
// import { ViewChild, ContentChild } from '@angular/core/src/metadata/di';
// import { ElementDef } from '@angular/core/src/view';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  // @ViewChild('logo') logoHolder;

  constructor(public el: ElementRef) {
    console.log(el.nativeElement);
  }

  // window scroll listener
  @HostListener('window:scroll', ['$event']) checkWindowScroll(elem) {
    const componentPos = this.el.nativeElement.offsetTop;
    const scrollPos = window.scrollY;

    if (scrollPos >= componentPos) {
      console.log(scrollPos, elem);
      // this.logoHolder.style = {
        // 'transform': 'translate(0px, 200px)'
      // };
    }
  }
}
