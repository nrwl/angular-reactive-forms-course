import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forms-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: { path: string; text: string; icon: string }[];

  constructor(private router: Router) {
    this.navLinks = router.config
      .filter(x => !!x.data)
      .map(x => ({
        path: x.path,
        text: x.data ? `${x.data.name} - ${x.data.subtitle}` : '',
        icon: x.data && x.data.icon
      }));
  }
}
