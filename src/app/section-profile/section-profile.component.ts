import { ResumeService } from './../service/resume.service';
import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.css']
})
export class SectionProfileComponent implements OnInit {

  // profile: Profile;
  firstName = 'VenuGopal';
  lastName = 'Meesala';
  email = 'vmeesala@nisum.com';
  phone_no = '+91 8688-126-345';

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  onProfileAdd() {
    // this.resumeService
  }

}
