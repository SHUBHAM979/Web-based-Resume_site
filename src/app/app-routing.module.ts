import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './user-information/contact/contact.component';
import { CoursesComponent } from './user-information/courses/courses.component';
import { ExperienceComponent } from './user-information/experience/experience.component';
import { GeneralInfoComponent } from './user-information/general-info/general-info.component';
import { LicenceComponent } from './user-information/licence/licence.component';
import { ProjectsComponent } from './user-information/projects/projects.component';
import { SkillsComponent } from './user-information/skills/skills.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  { path: '', redirectTo:'/signup', pathMatch:'full' },
  {path:'signup', component : SignupComponent},
  { path : 'login', component: LoginComponent },
  {path : 'addinfo',component:UserInformationComponent},
  {path : 'home',component:DisplayInfoComponent,
  children:[
    {path : 'exp',component:ExperienceComponent},
    {path : 'projects',component: ProjectsComponent},
    {path : 'licence', component : LicenceComponent},
    {path : 'course', component : CoursesComponent},
    {path : 'skills', component : SkillsComponent},
    {path : 'generalinfo', component : GeneralInfoComponent},
    {path : 'contact', component : ContactComponent}

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
