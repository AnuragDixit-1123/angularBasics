import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreation = 'No Server was created';
  serverName = 'dsds';
  serverCreated = false;

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated =true
    this.serverCreation = `Server Was created ${this.serverName}`
  }

  onUpdateServerName(event: any) {
     this.serverName = (<HTMLInputElement>event.target).value;
  }

}
