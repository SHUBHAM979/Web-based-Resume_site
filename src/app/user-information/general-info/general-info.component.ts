import { Component, OnInit } from '@angular/core';
import { GeneralIn, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  generalIn : GeneralIn = {
    firstName : "First Name",
    lastName : "Last Name",
    headline : "Headline",
  }

  constructor(private userInfo :UserInformationService) { }

  ngOnInit(): void {
    this.generalIn = this.userInfo.generalInformation;
  }

onSave() { 
  this.userInfo.onSaveGeneralInformation(this.generalIn);
    this.generalIn = this.userInfo.generalInformation;

}

}
