import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription
  constructor() { }

  ngOnInit() {
    // just like set time out but emits an event and is observalve
  //  this.firstObsSubscription =  interval(1000).subscribe(count => {
  //      console.log('count ===', count)

  //   })

  const customIntervalobservable = Observable.create( (observer) => {
  let count = 0;
    setInterval( () => {
      observer.next(count)

      if(count === 5 ){
        observer.complete()
      }
      // Error throw
       if(count > 3){
         observer.error(new Error("Count is greater than 3!"));
       }
      count++;
    }, 1000)
  })



  this.firstObsSubscription =   customIntervalobservable.pipe(filter(data => {
     return data > 2
  }), map( (data: number) => {
    return `round: ${(data+1)}`
  }

  ),).subscribe((count) => {
    console.log(count, '=== count')
  }, error => {
    console.log('error === ', error.message)
    // alert(error)
  },
    () => {
      console.log('completed')
    }
  )
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
