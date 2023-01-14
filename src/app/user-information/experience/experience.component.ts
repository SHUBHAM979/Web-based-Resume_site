import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('f') experienceForm!: NgForm;
  flag : boolean = false;
  experience : Experience = {
    email : '',
    companyName : '',
    position : '',
    dateOfJoining : '',
    dateOfLeaving : '',
    workDescription : '',
    usedTechnology : '',

  }
  pastexperince : Experience[] = [];
  constructor(private userinfo : UserInformationService) { }

  ngOnInit(): void {
    this.pastexperince = this.userinfo.experiences;

  }

  addExperience(){
    this.flag = !this.flag;
  }

  onSubmit() {

    this.experience.companyName = this.experienceForm.value.companyName;
    this.experience.position = this.experienceForm.value.position;
    this.experience.dateOfJoining = this.experienceForm.value.doj;
    this.experience.dateOfLeaving = this.experienceForm.value.dol;
    this.experience.workDescription = this.experienceForm.value.description;
    this.experience.usedTechnology = this.experienceForm.value.us;
    this.userinfo.onAddExperience(this.experience);
    this.experienceForm.reset();
    this.pastexperince = this.userinfo.experiences;
    this.experience =  {
      email : '',
      companyName : '',
      position : '',
      dateOfJoining : '',
      dateOfLeaving : '',
      workDescription : '',
      usedTechnology : '',
  
    };
    this.flag = false;

  }

}
