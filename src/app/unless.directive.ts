import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
/**
 *  This is the example of structural directive
 * 
 */
export class UnlessDirective {
 // whenever a condition changes we execute a method

  @Input() set appUnless(condition: boolean) {

    if( !condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
       this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
