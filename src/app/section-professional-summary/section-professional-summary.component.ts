import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-professional-summary',
  templateUrl: './section-professional-summary.component.html',
  styleUrls: ['./section-professional-summary.component.css']
})
export class SectionProfessionalSummaryComponent implements OnInit {

  summary: string[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  onAddSummary(summaryItem: string) {
    this.summary.push(summaryItem);
    this.resumeService.setProfessionalSummary(this.summary);
  }
}
