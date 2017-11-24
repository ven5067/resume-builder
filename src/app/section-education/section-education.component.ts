import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.css']
})
export class SectionEducationComponent implements OnInit {

  eduItems: string[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  onAddEducation(eduItem: string) {
    this.eduItems.push(eduItem);
    this.resumeService.setEducation(this.eduItems);
  }

}
