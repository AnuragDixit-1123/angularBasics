import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {

  // Type is not optional enter the name of class u want to inject
  constructor( private loggingService:LoggingService, 
    private accountsService: AccountsService ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus)

    // You should not usel it like that
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
  }
}
