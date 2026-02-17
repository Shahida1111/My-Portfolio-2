import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
  {
    role: 'Associate Software Engineer',
    company: 'Yoors - Colombo 3',
    duration: 'Aug 2024 ',
    location: 'Colombo, Sri Lanka',
    description: 'Developed enterprise-scale insurance management systems focusing on digital transformation and modular frontend architecture.',
    achievements: [
      'Engineered modular Angular components following strict architecture to ensure high software quality and extensibility.',
      'Utilized SonarQube to enforce code standards and eliminate vulnerabilities, ensuring zero-tolerance for technical defects.',
      'Generated precise JasperSoft reports to meet user department requirements and ensure accurate delivery of business data.',
      'Collaborated with backend teams to integrate RESTful APIs, ensuring project delivery within established management schedules.'
    ]
  },
  {
    role: 'Intern Software Engineer',
    company: 'Kapruka Holdings PLC (KPHL)',
    duration: 'July 2023 - January 2024',
    location: 'Colombo, Sri Lanka',
    description: 'Contributed to a vendor management system by designing frontend interfaces and implementing backend API endpoints.',
    achievements: [
      'Designed responsive frontend interfaces and integrated backend data via REST APIs using Spring Boot frameworks.',
      'Developed backend endpoints and managed MySQL database structures to support vendor management system functionalities.',
      'Studied UAT and defect reports during development to ensure bug-free delivery of software features.'
    ]
  },
  {
    role: 'Trainee',
    company: 'People’s Bank',
    duration: 'October 2018 - March 2019',
    location: 'Colombo, Sri Lanka',
    description: 'Assisted in banking operational processes, focusing on cash handling, account opening, and transaction security.',
    achievements: [
      'Managed cash handling and transaction processing in the opening section while maintaining 100% financial accuracy.',
      'Facilitated the account opening process by verifying customer documentation and inputting data into banking systems.',
      'Executed transactions in the opening section while strictly adhering to security protocols.'
    ]
  }
];
}