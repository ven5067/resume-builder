import { ResumeService } from '../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-professional-summary',
  templateUrl: './section-professional-summary.component.html',
  styleUrls: ['./section-professional-summary.component.css']
})
export class SectionProfessionalSummaryComponent implements OnInit {

  item: String = '';
  items: String[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() { }

  onAdd() {
    this.items.push(this.item);
    this.resumeService.setProfessionalSummary(this.items);
    this.onClear();
  }

  onClear() {
    this.item = '';
  }
}
