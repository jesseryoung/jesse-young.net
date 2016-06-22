import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ResumeComponent } from './resume/resume.component'

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/resume', name: 'Resume', component: ResumeComponent, useAsDefault: true }
])


export class AppComponent {
}