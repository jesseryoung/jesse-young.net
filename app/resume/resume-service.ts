import { Injectable }     from '@angular/core';
import { ContactInfo, Education, Objective, ProfessionalExperience } from './models/resume-models'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface IResumeService {
    GetContactInfo() : Promise<ContactInfo>;
    GetEducation() : Promise<Education>;
    GetObjective(): Promise<Objective>;
    GetProfessionalExperienceList() : Promise<ProfessionalExperience[]>;
}

@Injectable()
export class ResumeService implements IResumeService {
    constructor(private http : Http) { }

    public GetContactInfo() : Promise<ContactInfo> {
        return this.http
            .get('/data/contactinfo.json')
            .toPromise()
            .then(res => res.json());
    }
    GetEducation() : Promise<Education> {
        return this.http
            .get('/data/education.json')
            .toPromise()
            .then(res => res.json());
    }
    GetObjective(): Promise<Objective> {
        return this.http
            .get('/data/objective.json')
            .toPromise()
            .then(res => res.json());
    }
    GetProfessionalExperienceList() : Promise<ProfessionalExperience[]> {
        return this.http
            .get('/data/professionalexperience.json')
            .toPromise()
            .then(res => res.json());
    }
}
