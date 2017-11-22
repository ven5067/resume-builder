import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-section-resume-preview',
  templateUrl: './section-resume-preview.component.html',
  styleUrls: ['./section-resume-preview.component.css']
})
export class SectionResumePreviewComponent implements OnInit {

  docDefinition = {
    info: {
      title: 'Venugopal_Meesala_Resume.pdf',
      author: 'Venugopal',
      subject: 'Resume'
    },
    content: [
        {
          image: 'data:image/png;base64,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',			width: 150
        },
        {
          text: 'Venugopal Meesala',
          style: 'subheader'
        },
        {
          text: 'Mobile : +91-8688126345',
          style: 'subheader'
        },
        {
            text: [
              {text: 'Email   :', style: 'subheader'},
              {text: '  vmeesala@nisum.com \n\n\n', style: 'email'}
            ]
        },
        {
          text: [
            {
              text: 'Professional Summary\n',
              style: 'header'
            },
            {
              text: '_______________________________________________________________________________________________\n\n'
            }
          ]
        },
        {
          ul: [
            'Hands on experience programming in Core Java.',
            'Hands on experience in coding Servlets and JSP pages.',
            'Hands on experience in mapping relational model using ORM Framework Hibernate.',
            'Hands on experience and Knowledge in Spring MVC, Spring Security and Spring Boot.',
            'Hands on experience in HTML, Java Script and JQuery.',
            'Having good knowledge in Oracle.',
            'Having Knowledge in Tools (Ant and Log4J).',
            'Working Knowledge in Web Services.',
            'Hands on experience in using IDE eclipse.',
            'Ability to learn and adapt new Technologies in short time.'
          ]
        },
        {
          text: [
            {
              text: '\nTechnical Skills\n',
              style: 'header'
            },
            {
              text: '_______________________________________________________________________________________________\n\n'
            }
          ]
        },
        {
          ul: [
            {
              text: [
                {text: 'UI Technologies          : ', bold: true },
                {text: '\t HTML, CSS, JavaScript. \n'}
              ],
            },
            {
              text: [
                {text: 'UI Frameworks            : ', bold: true },
                {text: '\t Bootstrap, AngularJS, JQuery. \n'}
              ],
            },
            {
              text: [
                {text: 'Languages                   : ', bold: true },
                {text: '\t Java. \n'}
              ],
            },
            {
              text: [
                {text: 'Backend Frameworks: ', bold: true },
                {text: '\t Spring, Spring Security, Spring Data, Spring Boot and Hibernate.. \n'},
              ]
            },
            {
              text: [
                {text: 'Databases                    : ', bold: true },
                {text: '\t Oracle, MySQL. \n'},
              ]
            },
            {
              text: [
                {text: 'NOSQL Databases      : ', bold: true },
                {text: '\t Mongo DB. \n'},
              ]
            },
            {
              text: [
                {text: 'IDE/RAD Tools             : ', bold: true },
                {text: '\t Eclipse, Spring Tool Suite, Maven, Gradle. \n'},
              ]
            },
            {
              text: [
                {text: 'Web Services               : ', bold: true },
                {text: '\t Restful. \n'},
              ]
            },
            {
              text: [
                {text: 'Application Servers    : ', bold: true },
                {text: '\t Tomcat. \n'},
              ]
            },
            {
              text: [
                {text: 'Version Control Tools : ', bold: true },
                {text: '\t GIT. \n'},
              ]
            }
          ]
        },
        {
          text: [
            {
              text: '\nExperience\n',
              style: 'header'
            },
            {
              text: '_______________________________________________________________________________________________\n\n'
            }
          ]
        },
        {
          ul: [
            'Currently working as Software Engineer for Nisum Consulting Pvt. Ltd, Hyderabad.',
            'Previously worked as a Software Developer in Dataset Solutions, Hyderabad since Jun 2014 to Aug 2016.'
          ]
        },
        {
          text: [
            {
              text: '\n\n\nProfessional Experience\n',
              style: 'header'
            },
            {
              text: '_______________________________________________________________________________________________\n\n'
            }
          ]
        },
        {
          ul: [
            {
              text: [
                {text: 'Project Name  : ', bold: true },
                {text: '\t Nisum Recruitment Portal. \n'}
              ]
            },
            {
              text: [
                {text: 'Role                  : ', bold: true },
                {text: '\t Software Developer. \n'}
              ]
            },
            {
              text: [
                {text: 'Organization   : ', bold: true },
                {text: '\t Nisum Consulting Pvt Ltd.. \n'}
              ],
            },
            {
              text: [
                {text: 'Technologies  : ', bold: true },
                {text: '\t Java, Spring,Spring boot, Mongo DB, AngularJS, Junit and Mockito. \n'}
              ]
            },
            {
              text: [
                {text: 'Tools                : ', bold: true },
                {text: '\t Eclipse, GIT and Gradle. \n'}
              ]
            }
          ]
        },
        {
          text: [
            {text: '\n\nProject Description', style: 'subheader'},
            {text: '\n\nRecruitment portal is an Intra organization application for managing all recruiter activities from creating position to sourcing profiles and scheduling Interviews. It tracks the recruiter performance and profiles Information.'}
          ]
        },
        {
          text: [
            {text: '\n\nResponsibilities\n\n', style: 'subheader'}
          ]
        },
        {
          ul: [
            'Developed UI validations using Java Script and Angular JS.',
            'Developed web pages using HTML, CSS and Angular JS.',
            'Involved in development of the Spring Controller, Service and Repository layers.',
            'Involved in Bug fixing.',
            'Involved in writing test cases with Junit framework.'
          ]
        },
        {
          text: [
            {text: '\n\n\nProject Description', style: 'subheader'},
            {text: '\n\nRecruitment portal is an Intra organization application for managing all recruiter activities from creating position to sourcing profiles and scheduling Interviews. It tracks the recruiter performance and profiles Information.'}
          ]
        },
        {
          text: [
            {text: '\n\nResponsibilities\n\n', style: 'subheader'}
          ]
        },
        {
          ul: [
            'Developed UI validations using Java Script and Angular JS.',
            'Developed web pages using HTML, CSS and Angular JS.',
            'Involved in development of the Spring Controller, Service and Repository layers.',
            'Involved in Bug fixing.',
            'Involved in writing test cases with Junit framework.'
          ]
        },
        {
          text: [
            {text: '\n\n\n\n\n\n\n\n\n\n\n\n\nProject Description', style: 'subheader'},
            {text: '\n\nRecruitment portal is an Intra organization application for managing all recruiter activities from creating position to sourcing profiles and scheduling Interviews. It tracks the recruiter performance and profiles Information.'}
          ]
        },
        {
          text: [
            {text: '\n\nResponsibilities\n\n', style: 'subheader'}
          ]
        },
        {
          ul: [
            'Developed UI validations using Java Script and Angular JS.',
            'Developed web pages using HTML, CSS and Angular JS.',
            'Involved in development of the Spring Controller, Service and Repository layers.',
            'Involved in Bug fixing.',
            'Involved in writing test cases with Junit framework.'
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          color: '#29b4e3'
        },
        subheader: {
          fontSize: 12,
          bold: true
        },
        email: {
          fontSize: 12,
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      },
      defaultStyle: {
        alignment: 'justify'
      },
      footer: function() {
        return {
           text: '500 S. KRAEMER BOULEVARD, SUITE 301 BREA, CA 92821, ||| (714) 579 - 7979 ||| NISUM.COM  ',
           alignment: 'center',
          //  color: '#29b4e3',
          fontSize: 10
        };
      }
    };

  constructor(private resumeService: ResumeService) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
  }

  downloadPDF() {
    pdfMake.createPdf(this.docDefinition, 'resume').download('resume.pdf');
  }

  previewResume() {
    // pdfMake.createPdf(this.docDefinition).open();
    // console.log(JSON.stringify(this.resumeService.getDocDefinition()));
    pdfMake.createPdf(this.resumeService.getDocDefinition()).open();

  }

  printPDF() {
    pdfMake.createPdf(this.docDefinition).print();
  }

}
