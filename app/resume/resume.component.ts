import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume-service';
import { ContactInfo, Education, Objective, ProfessionalExperience } from './models/resume-models'

@Component({
   selector: 'resume',
   templateUrl: 'app/resume/resume.component.html'
})


export class ResumeComponent implements OnInit{
    
    contactInfo : ContactInfo;
    objective : Objective;
    education: Education;
    professionalExperience: ProfessionalExperience[];

    
    constructor(private resumeService: ResumeService) { }
    
    ngOnInit() {
        this.resumeService
            .GetContactInfo()
            .then(r => this.contactInfo = r);

        this.resumeService
            .GetObjective()
            .then(r => this.objective = r);

        this.resumeService
            .GetEducation()
            .then(r => this.education = r);

        this.resumeService
            .GetProfessionalExperienceList()
            .then(r => this.professionalExperience = r);
    }
}