import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { IResumeService, ResumeService } from './resume/resume-service'
import { provideRouter } from '@angular/router';
import { MdIconRegistry } from '@angular2-material/icon';
import { enableProdMode } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ 
    HTTP_PROVIDERS,
    ResumeService,
    MdIconRegistry,
    provideRouter(routes)
]);

