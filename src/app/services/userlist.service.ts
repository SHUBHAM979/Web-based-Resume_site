import { Injectable } from "@angular/core";

export interface userLogin {
    email : string,
    password : string
}

export interface User {
    username: string;
    email: string;
    password: string;

}


@Injectable({
    providedIn: 'root',
   })

export class UserlistService {
    userlist: User[] = [];

  constructor() {
    const localData = localStorage.getItem('userlist');
    if(localData != null){
      this.userlist = JSON.parse(localData);
    }

   }
  adduser(user: User) {
    const isUser = this.userlist.find((users) => users.email === user.email );
    if(isUser != undefined){
      alert('email is already in use please select another one');
      return;
    }
    const isUser2 = this.userlist.find((users) => users.username === user.username );
    if(isUser2 != undefined){
      alert('Usernmae is already in use please select another one');
      return;
    }


    this.userlist.push(user);
    localStorage.setItem('userlist', JSON.stringify(this.userlist));
    user = {
        username: '',
        email: '',
        password: '',
    }
  }
  
}