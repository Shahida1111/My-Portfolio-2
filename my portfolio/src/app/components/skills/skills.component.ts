import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        // { name: 'React', level: 85 },
        { name: 'TypeScript/JavaScript', level: 88 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Figma', level: 50 },
        // { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 10 },
        { name: 'Express', level: 10 },
        { name: 'Python', level: 10 },
        { name: 'Java Spring Boot', level: 60 },
        { name: 'RESTful APIs', level: 60 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 20 },
        { name: 'DbVisualizer', level: 40 },
        { name: 'MySQL', level: 82 },
        // { name: 'Firebase', level:  }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 70 },
        // { name: 'Docker', level: 75 },
        { name: 'Grafana', level: 50 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Tortoise SVN, Jenkins', level: 40 },
      ]
    },
    
  ];
}