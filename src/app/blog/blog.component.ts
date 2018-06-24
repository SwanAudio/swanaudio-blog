import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: 'blog.component.html',
  styleUrls: [ 'blog.component.styl' ],
})
export class BlogComponent implements OnInit {

  public posts = [1, 2, 3, 4];

  public ngOnInit() {}
}
