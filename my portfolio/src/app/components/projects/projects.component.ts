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
      title: 'E-Commerce Web Application',
      description:
        'Developed a full-featured e-commerce web application with product listing, user authentication, cart management, and order processing. Implemented a mock backend using JSON Server for REST API operations, enabling real-time data handling and seamless frontend-backend interaction.',
      image: 'assets/images/ecommerce.jpg', // update image path if needed
      technologies: [
        'Angular 14',
        'TypeScript',
        'JSON Server',
        'HTML',
        'CSS',
        'Bootstrap',
        'REST API',
      ],
      liveLink: 'https://github.com/Shahida1111/angular-ecom-main', // or deployed link if available
      githubLink: 'https://github.com/Shahida1111/eCommerceWebSite/tree/main',
      featured: true,
    },
    {
      title: 'Web Analytics Dashboard',
      description:
        'Tracks website traffic, user behavior, page views, session duration, bounce rates, and conversion metrics in real-time.',
      image: 'assets/images/dashboard1.png',
      technologies: [
        'Angular',
        'Grafana',
        'Figma',
        'Node js',
        'MySQL',
        'postman',
      ],
      liveLink: 'https://demo.yourdomain.com',
      githubLink: 'https://github.com/Shahida1111/Web-Analitics-Dashboard',
      featured: true,
    },
    {
      title: 'Enterprise Immigration Insurance System',
      description:
        'Built an insurance lifecycle platform managing policies from quote to issuance, with automated quote generation, real-time status updates, and business rule validation.',
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
      title: 'Food Ordering System',
      description:
        'A client-side food ordering platform that allows users to browse menu items, add them to a cart, and view order summaries using HTML, CSS, and JavaScript.',
      image: 'assets/images/food-ordering.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/food-ordering',
      githubLink: 'https://github.com/Shahida1111/Food-Orderig-System',
      featured: false,
    },
    
    // {
    //   title: 'Fitness Tracking App',
    //   description:
    //     'Mobile-first fitness application with workout plans, progress tracking, and nutrition guidance.',
    //   image: 'assets/images/project6.jpg',
    //   technologies: ['React Native', 'Express', 'MongoDB'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com/username/project',
    // },
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
