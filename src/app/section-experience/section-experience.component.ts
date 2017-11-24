import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.css']
})
export class SectionExperienceComponent implements OnInit {

  expItems: string[] = [];

  constructor( private resumeService: ResumeService) { }

  ngOnInit() {
  }

  onAddExperience(expItem: string) {
    this.expItems.push(expItem);
    this.resumeService.setExperience(this.expItems);
  }

}
