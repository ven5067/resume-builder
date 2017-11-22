import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-professional-summary',
  templateUrl: './section-professional-summary.component.html',
  styleUrls: ['./section-professional-summary.component.css']
})
export class SectionProfessionalSummaryComponent implements OnInit {

  summary: string[] = [
    'Hands on experience programming in Core Java.',
    'Working Knowledge in Web Services.',
    'Good exposure to Web/Application servers Tomcat.',
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddSummary(summaryItem: string) {
    this.summary.push(summaryItem);
  }
}
