import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserlistService } from '../services/userlist.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupform!: NgForm;
  signupObj : User={
    username : '',
    email:'',
    password:'',
  };

  constructor(private userlistService : UserlistService) { }

  ngOnInit(): void {
  }

  onSignup(){
    this.signupObj.username = this.signupform.value.username;
    this.signupObj.email = this.signupform.value.email;
    this.signupObj.password = this.signupform.value.password;
    this.userlistService.adduser(this.signupObj);
    this.signupform.reset();
    console.log(this.userlistService.userlist);
   
   
  }
}
