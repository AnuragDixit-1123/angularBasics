import { Directive, ElementRef, OnInit } from '@angular/core';

// Pass the objective to configure a directive
@Directive({
   selector: '[appBasicHighlight]'

})
export class BasicHighlightdirective implements OnInit{

    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}