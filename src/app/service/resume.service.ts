import { Resume } from './../model/Resume.model';
import { OnInit } from '@angular/core';
import { log } from 'util';

export class ResumeService implements OnInit {

    private resume: Resume;
    private info: any;
    private profile: any;
    private content: any[] = [];
    private styles: any;
    private defaultStyle: any;
    private footer: any;

    ngOnInit() {}

    constructor() {
        this.info = {
            title: 'Venugopal_Meesala_Resume.pdf',
            author: 'Venugopal',
            subject: 'Resume'
          };

        // setting of content
        // this.content[0] = this.getCompanyLogo();

    }

    setProfile(firstName: string, lastName: string, email: string, phone_no: string) {
        const fullName: any = {
            text: firstName + ' ' + lastName,
            style: 'subheader'
        };

        const mobile: any = {
            text: 'Mobile : +91-' + phone_no,
            style: 'subheader'
        };

        const emailAddr: any = {
            text: [
                {text: 'Email   :', style: 'subheader'},
                {text: '  ' + email + '\n\n\n', style: 'email'}
              ]
        };

        this.content[0] = [fullName, mobile, emailAddr];
    }

    setProfessionalSummary(summaryItems: string[]) {
      const professionalSummaryHeader = {
        text: [
          {
            text: 'Professional Summary\n',
            style: 'header'
          },
          {
            text: '_______________________________________________________________________________________________\n\n'
          }
        ]
      };

      const summaryObj = {
        ul: summaryItems
      };

      this.content[1] = [professionalSummaryHeader, summaryObj];
    }

    setExperience(expItems: string[]) {
      const experienceHeader = {
        text: [
          {
            text: '\nExperience\n',
            style: 'header'
          },
          {
            text: '_______________________________________________________________________________________________\n\n'
          }
        ]
      };

      const expObj = {
        ul: expItems
      };

      this.content[2] = [experienceHeader, expObj];
    }

    setEducation(eduItems: string[]) {

      const educationHeader = {
        text: [
          {
            text: '\nEducation\n',
            style: 'header'
          },
          {
            text: '_______________________________________________________________________________________________\n\n'
          }
        ]
      };

      const eduObj = {
        ul: eduItems
      };

      this.content[3] = [educationHeader, eduObj];
    }

    getDocDefinition() {
        return new Resume(
            this.info,
            this.content,
            this.styles,
            this.defaultStyle,
            this.footer
        );
    }


}
