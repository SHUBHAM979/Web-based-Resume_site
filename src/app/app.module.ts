import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { ExperienceComponent } from './user-information/experience/experience.component';
import { SkillsComponent } from './user-information/skills/skills.component';
import { ProjectsComponent } from './user-information/projects/projects.component';
import { LicenceComponent } from './user-information/licence/licence.component';
import { CoursesComponent } from './user-information/courses/courses.component';
import { GeneralInfoComponent } from './user-information/general-info/general-info.component';
import { ContactComponent } from './user-information/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UserInformationComponent,
    DisplayInfoComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    LicenceComponent,
    CoursesComponent,
    GeneralInfoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
