import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-post',
  templateUrl: 'post.component.html',
  styleUrls: [ 'post.component.styl' ],
})
export class PostComponent implements OnInit {

  public content: Observable<string>;

  public constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.content = this.blogService.getPost();
  }
}
