import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume-service';
import { ContactInfo, Education, Objective, ProfessionalExperience } from './models/resume-models'

@Component({
   selector: 'resume',
   templateUrl: 'app/resume/resume.component.html'
})


export class ResumeComponent implements OnInit{
    
    contactInfo : ContactInfo;

    
    constructor(private resumeService: ResumeService) { }
    
    ngOnInit() {
        this.resumeService
            .GetContactInfo()
            .then(r => this.contactInfo = r);
    }
}