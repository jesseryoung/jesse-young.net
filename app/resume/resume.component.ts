import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume-service';
import { ContactInfo, Education, Objective, ProfessionalExperience, Skill } from './models/resume-models'
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { MdIcon } from '@angular2-material/icon';

@Component({
    selector: 'resume',
    template: require('./resume.component.html'),
    styles: [ require('./resume.component.css') ],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon, MD_TOOLBAR_DIRECTIVES, MD_LIST_DIRECTIVES]
})


export class ResumeComponent implements OnInit {

    contactInfo: ContactInfo;
    objective: Objective;
    education: Education;
    professionalExperience: ProfessionalExperience[];
    skills: Skill[];


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

        this.resumeService
            .GetSkills()
            .then(r => this.skills = r);
    }
}