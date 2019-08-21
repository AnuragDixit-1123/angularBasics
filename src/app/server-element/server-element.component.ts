import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // to disable the encapsulation using the shadow dom and special tags are not added any more
})
export class ServerElementComponent implements OnInit, OnChanges {

  /**
   * for binding child with the parent
   * Input is used to get data from other class
   * srvelement is tha alias used to change the property name  
   * 
   **/ 
  @Input('srvElement') element: {type:string, name:string, content: string}
  @Input() name: string;

  constructor() { 
    console.log('constructor server')
  }

  ngOnInit() {
    console.log('ng on init server')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges server', changes)
  }

}
