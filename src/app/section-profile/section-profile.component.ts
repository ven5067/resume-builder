import { ResumeService } from '../service/resume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.css']
})
export class SectionProfileComponent implements OnInit {

  firstName: String = 'FirstName';
  lastName: String = 'LastName';
  email: String = 'your_mail@gmail.com';
  phone_no: String = '8688-126-345';

  isEditable: Boolean = true;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() { }

  onAdd() {
    this.resumeService.setProfile(this.firstName, this.lastName, this.email, this.phone_no);
    this.isEditable = false;
  }

  onEdit() {
    this.isEditable = true;
  }

}
