import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @ViewChild('f') courseForm!: NgForm;
  course : Course = {
    nameOfCourse : '',
    issuingAuthority : '',
   };
  flag : boolean = false;
  pastcourses : Course[] = [];
  constructor(private userinfo :UserInformationService) { }

  ngOnInit(): void {
    this.pastcourses = this.userinfo.courses;
  }

  addCourse() { this.flag = !this.flag; }

  onSubmit() {
    this.course.nameOfCourse = this.courseForm.value.name;
    this.course.issuingAuthority = this.courseForm.value.io;
    this.userinfo.onAddCourse(this.course);
    this.pastcourses = this.userinfo.courses;
    this.courseForm.reset();
    this.course = {
      nameOfCourse : '',
      issuingAuthority : '',
     };
    this.flag = false;


  }

}
