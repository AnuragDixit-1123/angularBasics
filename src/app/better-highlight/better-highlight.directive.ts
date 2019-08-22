import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
 
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

    // It doenot use the renderer property
  // Dom properties doesnot know dashes
  // @HostBinding('style.backgroundColor') backgroundColor: string='red';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  // better way to use the directive
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // interesting methods to work with the dom basically
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor=this.highlightColor
  }

   // To change the style with the mouse hover
  // Host listener to listen any events
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    //  this.backgroundColor = 'blue'
    this.backgroundColor = this.highlightColor

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    // this.backgroundColor = 'transparent'
    this.backgroundColor = this.defaultColor

  }


}
 