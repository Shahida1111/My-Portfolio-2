import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Enterprise Immigration Insurance System',
      description:
        'Developed an insurance lifecycle platform that tracks policies from initial quote to issuance, including automated quote generation, real-time policy status updates, and validation using business rules. Built modular backend services for managing reference data and processing policy workflows.',
      image: 'assets/images/insurance-system.jpg',
      technologies: [
        'Angular 16',
        'Spring Boot 3',
        'Java 17',
        'MySQL',
        'Jakarta EE',
        'REST API',
      ],
      liveLink:
        'https://github.com/Shahida1111/Enterprise-Immigration-Insurance-System', // Replace with your link if available
      githubLink:
        'https://github.com/Shahida1111/Enterprise-Immigration-Insurance-System',
      featured: true,
    },
    {
      title: 'Web Analytics & Business Intelligence Dashboard',
      description:
        'Tracks website traffic, user behavior, page views, session duration, bounce rates, and conversion metrics in real-time.',
      image: 'assets/images/dashboard1.png',
      technologies: ['Angular', 'Grafana', 'Node js', 'MySQL', 'postman'],
      liveLink: 'https://demo.yourdomain.com',
      githubLink: 'https://github.com/Shahida1111/Web-Analitics-Dashboard',
      featured: true,
    },
    {
      title: 'Food Ordering System',
      description:
        'A client-side food ordering platform that allows users to browse menu items, add them to a cart, and view order summaries using HTML, CSS, and JavaScript.',
      image: 'assets/images/food-ordering.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/food-ordering',
      githubLink: 'https://github.com/Shahida1111/Food-Orderig-System',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization and performance insights.',
      image: 'assets/images/project4.jpg',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'D3.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
    },
    {
      title: 'My Portfolio',
      description:
        'A personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies to highlight my work as a developer.',
      image: 'assets/images/portfolio.jpg',
      technologies: ['Angular', 'HTML5', 'CSS3', 'TypeScript'],
      liveLink: 'https://example.com/portfolio',
      githubLink: 'https://github.com/Shahida1111/your-portfolio-repo',
      featured: false,
    },
    {
      title: 'Fitness Tracking App',
      description:
        'Mobile-first fitness application with workout plans, progress tracking, and nutrition guidance.',
      image: 'assets/images/project6.jpg',
      technologies: ['React Native', 'Express', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
    },
  ];

  filteredProjects = this.projects;
  activeFilter = 'all';

  filterProjects(filter: string) {
    this.activeFilter = filter;
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else if (filter === 'featured') {
      this.filteredProjects = this.projects.filter((p) => p.featured);
    }
  }
}
