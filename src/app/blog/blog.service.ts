import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BlogService {

  constructor() {}

  listPosts() {

  }

  getPost(): Observable<string> {
    return of(`
    foo
    ===

    bar
    `);
  }

}
