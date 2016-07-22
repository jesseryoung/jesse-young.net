import { RouterConfig } from '@angular/router';
import { ResumeComponent } from './resume/resume.component'



export const routes: RouterConfig = [
    { path: 'resume', component: ResumeComponent },
    { path: '**', redirectTo: 'resume' }
];