import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import { ResumeComponent } from './resume/resume.component'



@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]  
})

@RouteConfig([
  { path: '/resume', name: 'Resume', component: ResumeComponent, useAsDefault: true }
])


export class AppComponent {
  title = 'jesse-young.net'
}