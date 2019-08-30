import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {

   this.errorSub = this.postsService.error.subscribe( errorMessage => {
      this.error = errorMessage;
    });

   this.isFetching = true;
   this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
       this.isFetching = false;
       this.error = error.message;
       console.log('error ===', error);
    });
  }

  onCreatePost(postData: Post) {
    // // Send Http request shifted to the service
    // this.http
    //   .post(
    //     'https://angularguide.firebaseio.com/posts.json',
    //     postData
    //   )
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });

    // console.log(postData);
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
       this.isFetching = false;
       this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
       this.loadedPosts = [];
    });
  }

  // private fetchPosts() {
  //   this.isFetching = true;


    // shifted to service
    // this.http
    // // .get('https://angularguide.firebaseio.com/posts.json')
    // //   .pipe(map((responseData: {[key: string]: Post}) => {
    //   // or use this
    //   .get<{ [key: string]: Post}>('https://angularguide.firebaseio.com/posts.json')
    //   .pipe(map((responseData) => {
    //     const postArray: Post[] = [];
    //     for (const data in responseData) {
    //       if (responseData.hasOwnProperty(data)) {
    //         postArray.push({ ...responseData[data], id: data});
    //       }
    //     }
    //     return postArray;
    //   }))
    //   .subscribe((posts) => {
    //     // console.log(posts);
    //     this.isFetching = false
    //     this.loadedPosts = posts;
    //   });
  // }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null
  }
}
