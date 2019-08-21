import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   *  1) Output decorator to pass the evnt created by us manually to pass to the parent component
   *  2) EventEmitter is used to create a new event and () for the initialisation of the 
   *     constructor 
   *  3) Object is the type of data which will be emitted by this class to the parent class
   *  4) sCreated is the alias used to change the property name
   * 
   */
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); 
  // newServerName = '';
  // newServerContent = '';

  // it needs an argument, a selector
  // you can simply pass the component in parent

   @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  
   constructor() { }

  ngOnInit() {
  }

  /**
   * @description
   *   This function is called from its own html class
   *   emit is used to emit the object to the class where above defined listeners are called
   */
  onAddServer(nameInput) {
    console.log(this.serverContentInput.nativeElement.value)
  //   console.log(nameInput.value)
   this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value,

      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.serverContentInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  }

