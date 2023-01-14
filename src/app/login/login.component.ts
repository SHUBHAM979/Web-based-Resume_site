import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserlistService, userLogin } from '../services/userlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;

  loginObj : userLogin={
    email:'',
    password:'',
  };
  constructor(private userList : UserlistService,
    private router: Router, private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('userlist');
    if(localData != null){
      this.userList.userlist = JSON.parse(localData);
    }
  }

  onLogin(){ 
    this.loginObj.email = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;
    const isUser = this.userList.userlist.find((user) => user.email === this.loginObj.email && user.password === this.loginObj.password);
    console.log(isUser);
    if(isUser != undefined){
      alert('Login Successfull');
      console.log(this.userList.userlist);
    } else {
      alert('Login Failed');
      this.loginForm.reset();
    }

    this.router.navigate(['/home/generalinfo']);
    


  }

}
