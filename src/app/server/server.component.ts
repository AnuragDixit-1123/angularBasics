
import { Component } from '@angular/core'

// compile to js
@Component({
    // meta data for the class to tell angular what to do with the class
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online {
         color: white;
       }
    `] 
}) 
 
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
      return  this.serverStatus === 'online' ? 'green' : 'red'
    }
}