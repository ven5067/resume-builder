import { ResumeService } from '../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.css']
})
export class SectionEducationComponent implements OnInit {

  item: String = '';
  items: String[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  onAdd() {
    this.items.push(this.item);
    this.resumeService.setEducation(this.items);
    this.onClear();
  }

  onClear() {
    this.item = '';
  }

}
