require('zone.js');
import 'reflect-metadata'

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { IResumeService, ResumeService } from './resume/resume-service'
import { provideRouter } from '@angular/router';
import { MdIconRegistry } from '@angular2-material/icon';
import { routes } from './app.routes';

bootstrap(AppComponent, [ 
    HTTP_PROVIDERS,
    ResumeService,
    MdIconRegistry,
    provideRouter(routes)
]);