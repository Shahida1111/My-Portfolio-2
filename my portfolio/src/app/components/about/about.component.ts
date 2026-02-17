import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutInfo = {
    title: 'About Me',
    description: `I'm a passionate software developer with a strong foundation in building 
    scalable web applications. With expertise in modern frameworks and technologies, 
    I transform ideas into elegant, efficient solutions. My approach combines technical 
    excellence with creative problem-solving to deliver exceptional user experiences.`,
    highlights: [
      {
        icon: '💻',
        title: 'Clean Code',
        description: 'Writing maintainable, well-documented code following best practices'
      },
      {
        icon: '🚀',
        title: 'Performance',
        description: 'Optimizing applications for speed and efficiency'
      },
      {
        icon: '🎨',
        title: 'UI/UX Focus',
        description: 'Creating intuitive, beautiful user interfaces'
      },
      {
        icon: '🔧',
        title: 'Problem Solver',
        description: 'Finding innovative solutions to complex challenges'
      }
    ],
    stats: [
      { number: '2+', label: 'Years Experience' },
      { number: '12+', label: 'Projects Completed' },
      { number: '15+', label: 'Technologies' },
      { number: '100%', label: 'Client Satisfaction' }
    ]
  };
}