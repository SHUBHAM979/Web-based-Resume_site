import { Component, OnInit } from '@angular/core';
import { Contact, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : Contact = {
    email : "Email",
    phone : "Phone",
  }
  constructor(private userInfo :UserInformationService) { }

  ngOnInit(): void {
    this.contact = this.userInfo.contact;
  }

  onSave() {
    this.userInfo.onSaveContact(this.contact);
    this.contact = this.userInfo.contact;

  }

}
