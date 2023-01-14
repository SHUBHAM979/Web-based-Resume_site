import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('f') projectForm!: NgForm;
  project : Project = {
    projectTitle : '',
    projectUrl : '',
    projectDescription : '',
    projectDuration : '',
  }
  flag:boolean = false;
  pastprojects : Project[] = [];  
  constructor(private userinfo : UserInformationService) {
    
   }

  ngOnInit(): void {
    this.pastprojects = this.userinfo.projects;
  }

  onaddProject() { this.flag = !this.flag; }
  onSubmit() {
    this.project.projectTitle = this.projectForm.value.ProjectTitle;
    this.project.projectUrl = this.projectForm.value.url;
    this.project.projectDescription = this.projectForm.value.projectDescription;
    this.project.projectDuration = this.projectForm.value.Duration;
    this.userinfo.onAddProject(this.project);
    this.pastprojects = this.userinfo.projects;
    this.projectForm.reset();
    this.project  = {
      projectTitle : '',
      projectUrl : '',
      projectDescription : '',
      projectDuration : '',
    };
    this.flag = false;

  }

}
