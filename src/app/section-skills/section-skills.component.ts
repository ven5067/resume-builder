import { Component, OnInit } from '@angular/core';

export interface InputItem {
  display: String;
  value: String;
}
export class Skill {
  constructor(public item: String, public inputItems: InputItem[]) { }
}

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

  item: String = '';
  inputItems: InputItem[] = [];
  skills: Skill[] = [];

  constructor() { }

  ngOnInit() { }

  onAdd() {
    this.skills.push({
      item: this.item,
      inputItems: this.inputItems
    });

    this.onClear();
  }

  onClear() {
    this.item = '';
    this.inputItems = [];
  }

}
