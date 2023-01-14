import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillName: string = "Skills";
  yoe : string = "Years of Experience"; 
  constructor(private userinfo : UserInformationService) { }

  ngOnInit(): void {
    this.skillName = this.userinfo.skill.skillName;
    this.yoe = this.userinfo.skill.yearsOfExperience;
  }

  onSave() { 
    this.userinfo.onSaveSkills({skillName :this.skillName,
      yearsOfExperience : this.yoe}
      );
      this.skillName = this.userinfo.skill.skillName;
    this.yoe = this.userinfo.skill.yearsOfExperience;


  }

}
