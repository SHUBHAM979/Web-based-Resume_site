import { Injectable } from "@angular/core";

export interface GeneralIn {
    firstName : string,
    lastName : string,
    headline : string,
}

export interface Experience {
        email : string,
        companyName : string,
        position : string,
        dateOfJoining : string,
        dateOfLeaving : string,
        workDescription : string,
        usedTechnology : string,
}

export interface  Project { 
    projectTitle:string,
    projectUrl:string,
    projectDescription:string,
    projectDuration:string,
}

export interface Licence { 
    name:string,
    issuingAuthority:string,
    certificationUrl:string,
    issueDate:string,
}

export interface Course { 
    nameOfCourse:string,
    issuingAuthority:string,
}
export interface Skill {
    skillName : string,
        yearsOfExperience : string,

}

export interface userInformation {
    email : string,
    GeneralInformation : GeneralIn,
    Experiences : Experience[],
    skills: Skill,
    projects : Project  [],
    addLicenseandCertifications : Licence[],
    addCourse : Course[],
    contactInformation : Contact
}

export interface Contact {   
    email:string,
    phone:string,
}

@Injectable({
    providedIn: 'root',
   })

export class UserInformationService {
    skill : Skill= {
        skillName : "",
        yearsOfExperience : "",
    };
    generalInformation : GeneralIn = { 
        firstName : "",
        lastName : "",
        headline : "",
    }
    contact :Contact = {
        email : "",
        phone : "",
    }
    experiences : Experience[]=[];
    projects : Project[]=[];
    licences : Licence[]=[];
    courses : Course[]=[];
    constructor() { 
        const localData = localStorage.getItem('experiences');
    if(localData != null){
      this.experiences = JSON.parse(localData);
    }

    const localData1 = localStorage.getItem('projects');
    if(localData1 != null){
        this.projects = JSON.parse(localData1);
    }

    const localData2 = localStorage.getItem('licence');
    if(localData2 != null){
        this.licences = JSON.parse(localData2);
    }
    const localData3 = localStorage.getItem('course');
    if(localData3 != null){
        this.courses = JSON.parse(localData3);
    }

    const localData4 = localStorage.getItem('skill');
    if(localData4 != null){
        this.skill = JSON.parse(localData4);}

    const localData5 = localStorage.getItem('generalInformation');
    if(localData5 != null){
        this.generalInformation = JSON.parse(localData5);}

    const localData6 = localStorage.getItem('contact');
    if(localData6 != null){
        this.contact = JSON.parse(localData6);}

    }

    onAddExperience(experience:Experience){ 
        this.experiences.push(experience);
        localStorage.setItem('experiences', JSON.stringify(this.experiences));
    }
    onAddProject(project:Project){ 
        this.projects.push(project);
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
    onAddLicence(licence:Licence){ 
        this.licences.push(licence);
        localStorage.setItem('licence', JSON.stringify(this.licences));
        
    }
    
    onAddCourse(course:Course){ 
        this.courses.push(course);
        localStorage.setItem('course', JSON.stringify(this.courses));
    }
    onSaveSkills(skill :Skill) {
        this.skill = skill;
        localStorage.setItem('skill', JSON.stringify(this.skill));
    }
    onSaveGeneralInformation(generalInformation :GeneralIn) {
        this.generalInformation = generalInformation;
        localStorage.setItem('generalInformation', JSON.stringify(this.generalInformation));
    }
     
    onSaveContact(contact :Contact) { 
        this.contact = contact;
        localStorage.setItem('contact', JSON.stringify(this.contact));
    }
}