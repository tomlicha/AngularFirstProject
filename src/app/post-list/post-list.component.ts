import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (books: Post[]) => {
        this.posts = books;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}
