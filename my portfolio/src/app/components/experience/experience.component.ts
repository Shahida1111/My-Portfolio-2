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
      role: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      description: 'Leading development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Architected and developed scalable microservices serving 100K+ daily users',
        'Reduced application load time by 40% through optimization techniques',
        'Mentored team of 5 junior developers, improving code quality by 60%',
        'Implemented CI/CD pipelines reducing deployment time by 70%'
      ],
      current: true
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      duration: 'Mar 2021 - Dec 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client-facing web applications using modern tech stack.',
      achievements: [
        'Built 10+ responsive web applications using React and Angular',
        'Integrated third-party APIs and payment gateways',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Improved application performance metrics by 35%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      duration: 'Jun 2020 - Feb 2021',
      location: 'San Francisco, CA',
      description: 'Contributed to various frontend and backend projects while learning industry best practices.',
      achievements: [
        'Developed RESTful APIs using Node.js and Express',
        'Created responsive UI components using React and CSS',
        'Participated in code reviews and agile ceremonies',
        'Fixed 100+ bugs and implemented new features'
      ]
    }
  ];
}