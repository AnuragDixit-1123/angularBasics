import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // to disable the encapsulation using the shadow dom and special tags are not added any more
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  /**
   * for binding child with the parent
   * Input is used to get data from other class
   * srvelement is tha alias used to change the property name  
   * 
   **/ 
  @Input('srvElement') element: {type:string, name:string, content: string}
  @Input() name: string;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef

  constructor() { 
    console.log('constructor server')
  }

  ngOnInit() {
    console.log('ng on init server')
    console.log('text content of paragraph '+ this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges server', changes)
  }

  ngDoCheck() {
    console.log('ng do check server' )
  }

  ngAfterContentInit() {
    console.log('ng after content init')
    console.log('text content of paragraph '+ this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ng AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ng AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ng AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ng OnDestroy')
  }




}
