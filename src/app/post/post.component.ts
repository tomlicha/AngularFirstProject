import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 
  @Input() post: Post;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  LoveIt(){
    this.postsService.LoveIt(this.post)
  }

  DontLoveIt(){
    this.postsService.DontLoveIt(this.post)
  }

  getColor() {
    if(this.post.loveIts > 0 ) {
      return 'green';
    } else if(this.post.loveIts < 0 ) {
      return 'red';
    }
  }

  DeletePost(){
    this.postsService.DeletePost(this.post)
  }
}
