import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  postsSubject = new Subject<Post[]>();
  posts: Post[] = [];

  constructor() {
    this.getPosts();
   }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  LoveIt(post: Post){
    post.loveIts = post.loveIts + 1;
    this.savePosts()
    this.emitPosts();
  }

  DontLoveIt(post: Post){
    post.loveIts = post.loveIts - 1;
    this.savePosts();
    this.emitPosts();
  }
  
  DeletePost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
    this.savePosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }
}
