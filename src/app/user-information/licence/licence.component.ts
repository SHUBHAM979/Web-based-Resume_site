import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Licence, UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.css']
})
export class LicenceComponent implements OnInit {
  @ViewChild('f') licenceForm!: NgForm;
  licence : Licence = {
    name : '',
    issuingAuthority : '',
    certificationUrl : '',
    issueDate : '',
  }
  pastlicences : Licence[] = [];
  flag : boolean = false;
  constructor(private userinfo :UserInformationService) { 

  }

  ngOnInit(): void {
    this.pastlicences = this.userinfo.licences;
  }
  onaddLicence() { this.flag = !this.flag; }
  onSubmit() { 
    this.licence.name = this.licenceForm.value.name;
    this.licence.issuingAuthority = this.licenceForm.value.issuingOrganisation;
    this.licence.certificationUrl = this.licenceForm.value.cL;
    this.licence.issueDate = this.licenceForm.value.issueDate;
    this.userinfo.onAddLicence(this.licence);
    this.pastlicences = this.userinfo.licences;
    this.licenceForm.reset();
    this.licence = {
      name : '',
    issuingAuthority : '',
    certificationUrl : '',
    issueDate : '',
  };

    this.flag = false;
  }

}
