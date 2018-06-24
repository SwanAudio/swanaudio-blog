import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'ngx-markdown';

import { routes } from './blog.routes';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { PreviewComponent } from './preview/preview.component';

import { BlogService } from './blog.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MarkdownModule.forRoot(),
  ],
  declarations: [
    BlogComponent,
    PostComponent,
    PreviewComponent,
  ],
  providers: [ BlogService ]
})
export class BlogModule {}
