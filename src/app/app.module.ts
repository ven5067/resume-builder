import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionEducationComponent } from './section-education/section-education.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionProfileComponent } from './section-profile/section-profile.component';
import { SectionProfessionalSummaryComponent } from './section-professional-summary/section-professional-summary.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionProfessionalExperienceComponent } from './section-professional-experience/section-professional-experience.component';
import { SectionExperienceComponent } from './section-experience/section-experience.component';
import { SectionResumePreviewComponent } from './section-resume-preview/section-resume-preview.component';
import { ResumeService } from './service/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionEducationComponent,
    SectionSkillsComponent,
    SectionProfileComponent,
    SectionProfessionalSummaryComponent,
    SectionProfessionalExperienceComponent,
    SectionExperienceComponent,
    SectionResumePreviewComponent
  ],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
