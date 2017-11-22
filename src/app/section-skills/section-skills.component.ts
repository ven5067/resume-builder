import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];

  constructor() { }

  ngOnInit() {
  }

}
