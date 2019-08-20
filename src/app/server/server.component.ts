
import { Component } from '@angular/core'

// compile to js
@Component({
    // meta data for the class to tell angular what to do with the class
    selector: 'app-server',
    templateUrl: './server.component.html'
}) 
 
export class ServerComponent {

    serverId: number = 10;
    serverStatus: string = 'offline'

    getServerStatus() {
        return this.serverStatus;
    }
}