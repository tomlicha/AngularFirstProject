import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    this.loveIts=0
    this.created_at = new Date();
   }

  ngOnInit() {
  }

  LoveIt(){
    this.loveIts = this.loveIts + 1;
  }
  DontLoveIt(){
    this.loveIts = this.loveIts - 1;
  }
  getColor() {
    console.log(this.loveIts)
    if(this.loveIts > 0 ) {
      return 'green';
    } else if(this.loveIts < 0 ) {
      return 'red';
    }
}
}
