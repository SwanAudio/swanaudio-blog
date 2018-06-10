import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'swanaudio',
  templateUrl: 'swanaudio.component.html',
  styleUrls: [ 'swanaudio.component.styl' ],
})
export class AppComponent implements OnInit {

  public menuState: boolean;

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private analytics: Angulartics2GoogleAnalytics,
  ) {
    this.menuState = false;
  }

  public ngOnInit() {
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
    )
      .subscribe(evt => {
        let title = 'Swan Audio';
        if ((evt as any).title) {
          title += ' | ';
          title += (evt as any).title;
        }
        this.titleService.setTitle(title);
      });
  }

}
