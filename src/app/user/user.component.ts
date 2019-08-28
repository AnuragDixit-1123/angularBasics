import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  private acivatedSub: Subscription
  constructor(private route: ActivatedRoute,
       private userService: UserService
    ) {
  }

  ngOnInit() {
    // this is observables
   this.acivatedSub = this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    this.userService.activatedEmitter.next(true)
  }

  ngOnDestroy() {
    this.acivatedSub.unsubscribe()
  }
}
