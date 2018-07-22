import { ResumeService } from '../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.css']
})
export class SectionExperienceComponent implements OnInit {

  item: String = '';
  items: String[] = [];

  constructor( private resumeService: ResumeService) { }

  ngOnInit() {}

  onAdd() {
    this.items.push(this.item);
    this.resumeService.setExperience(this.items);
    this.onClear();
  }

  onClear() {
    this.item = '';
  }

}
