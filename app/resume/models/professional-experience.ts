export interface Company {
    Name : string;
    City : string;
    State : string;
}
export interface ProfessionalExperience {
    Company : Company;
    StartDate : Date;
    EndDate : Date;
    Title : string;
    Tasks: string[];
}