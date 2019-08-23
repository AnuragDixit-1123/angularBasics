import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})

export class AppComponent implements OnInit {
 
      accounts:{name:string, status: string}[] = [];

      constructor( private accountsService: AccountsService){}
     
      ngOnInit() {
        // array is reference type so we are getting an access to the
        // exact same data over there
        this.accounts = this.accountsService.accounts
      }
}
