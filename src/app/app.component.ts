import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();

  }

  onCreatePost(postData: Post) {
    // // Send Http request
    this.http
      .post(
        'https://angularguide.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });

    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
    // .get('https://angularguide.firebaseio.com/posts.json')
    //   .pipe(map((responseData: {[key: string]: Post}) => {
      // or use this
      .get<{ [key: string]: Post}>('https://angularguide.firebaseio.com/posts.json')
      .pipe(map((responseData) => {
        const postArray: Post[] = [];
        for (const data in responseData) {
          if (responseData.hasOwnProperty(data)) {
            postArray.push({ ...responseData[data], id: data});
          }
        }
        return postArray;
      }))
      .subscribe((posts) => {
        // console.log(posts);
        this.loadedPosts = posts;
      });
  }
}
