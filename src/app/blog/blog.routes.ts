import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

export const routes = [
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'blog/:slug', component: PostComponent, data: { title: 'Blog' } },
];
