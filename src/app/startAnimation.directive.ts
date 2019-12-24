import { Directive, OnDestroy, AfterViewInit, EventEmitter, ElementRef, Output } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[animations]'
})
export class StartAnimationDirective implements AfterViewInit, OnDestroy {

  @Output()
  appear: EventEmitter<void>;

  elementRect: any;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;
  
  styles: string;

  constructor(private element: ElementRef){
    this.appear = new EventEmitter<void>();
  }

  saveDimensions() { 
    this.elementRect = this.element.nativeElement.getBoundingClientRect();
    this.windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight);
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(){
    if(this.isVisible()){
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if(this.isVisible()){
        this.unsubscribe();
        this.appear.emit();
        this.element.nativeElement.classList.add(...this.styles.split(' '));
      }
    }
  }
  isVisible(){
    return !(this.elementRect.bottom < 0 || this.elementRect.top - this.windowHeight >= 0);
  }

  subscribe(){
    this.styles = this.element.nativeElement.getAttribute('animations');

    this.subscriptionScroll = fromEvent(window, 'scroll')
      .subscribe(() => {
        this.saveScrollPos(); 
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
  }

  ngAfterViewInit(){
    this.subscribe();
  }
  ngOnDestroy(){
    this.unsubscribe();
  }
}
