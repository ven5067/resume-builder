import { Component, OnInit } from '@angular/core';
export interface ProfessionalExperience {
  projectName: String;
  designation: String;
  duration: String;
  organization: String;
  technologies: InputItem[];
  tools: InputItem[];
  projectDescription: String;
  responsibilities: String[];
}
export interface InputItem {
  display: String;
  value: String;
}

@Component({
  selector: 'app-section-professional-experience',
  templateUrl: './section-professional-experience.component.html',
  styleUrls: ['./section-professional-experience.component.css']
})
export class SectionProfessionalExperienceComponent implements OnInit {

  projectName: String = '';
  designation: String = '';
  duration: String = '';
  organization: String = '';
  technologies: InputItem[] = [];
  tools: InputItem[] = [];
  projectDescription: String = '';
  responsibility: String = '';
  responsibilities: String[] = [];
  professionalExperience: ProfessionalExperience[] = [];

  constructor() { }

  ngOnInit() { }

  onAdd() {
    this.responsibilities.push(this.responsibility);
    this.responsibility = '';
  }

  onEdit() {

  }

  onSubmit() {
    this.professionalExperience.push({
      projectName: this.projectName,
      designation: this.designation,
      duration: this.duration,
      organization: this.organization,
      technologies: this.technologies,
      tools: this.tools,
      projectDescription: this.projectDescription,
      responsibilities: this.responsibilities
    });

    console.log(this.professionalExperience);
    this.onClear();
  }

  onClear() {
    this.projectName = '';
    this.designation = '';
    this.duration = '';
    this.organization = '';
    this.technologies = [];
    this.tools = [];
    this.projectDescription = '';
    this.responsibility = '';
    this.responsibilities = [];
  }
}
