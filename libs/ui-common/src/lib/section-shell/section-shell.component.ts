import { Component, OnInit, Input } from '@angular/core';
import { Router, Route, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, delay, switchMapTo, filter } from 'rxjs/operators';
import { animations } from '../animations';

interface SectionShellState {
  title: string;
  subtitle: string;
  lessons: {
    displayName: string;
    route: string;
  }[];
}

@Component({
  selector: 'forms-course-section-shell',
  templateUrl: './section-shell.component.html',
  styleUrls: ['./section-shell.component.scss'],
  animations
})
export class SectionShellComponent implements OnInit {
  routeData$: Observable<{
    sectionTitle: string;
    sectionSubtitle: string;
    sectionPath: string;
    lessonTitle: string;
    sectionLessons: {
      navText: string;
      path: string;
    }[];
    next?: string;
    prev?: string;
  }>;
  // private _sectionTitle$: Observable<string>;
  // private _sectionSubtitle$: Observable<string>;
  private _lessons$: Observable<string>;
  showLessons = true;
  navLinks: {
    path: string;
    navText: string;
    prev?: string;
    next?: string;
  }[] = [];

  constructor(private router: Router) {
    this.routeData$ = this.router.events.pipe(
      filter(
        (x): x is ActivationEnd =>
          x instanceof ActivationEnd && x.snapshot.component != null
      ),
      map(x => ({
        sectionTitle: x.snapshot.data.name,
        sectionSubtitle: x.snapshot.data.subtitle,
        lessonTitle: x.snapshot.data.navText,
        sectionLessons: x.snapshot.parent.routeConfig['_loadedConfig'].routes
          // .filter(y => y.data && !y.path.endsWith('-completed'))
          .filter(y => y.data)
          .map(
            (y: {
              path: string;
              data: { navText: string; prev?: string; next?: string };
            }) => ({
              path: y.path,
              navText: y.data.navText
            })
          ),
        sectionPath: x.snapshot.parent.url[0].path,
        next: x.snapshot.data.next,
        prev: x.snapshot.data.prev
      }))
    );
  }

  toggleLessonLinks() {
    this.showLessons = !this.showLessons;
  }

  ngOnInit() {}
}
