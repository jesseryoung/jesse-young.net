import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { IResumeService, ResumeService } from './resume/resume-service'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { MdIconRegistry } from '@angular2-material/icon';

bootstrap(AppComponent, [ 
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ResumeService,
    MdIconRegistry
]);