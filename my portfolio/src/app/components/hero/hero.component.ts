import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  name = 'SHAHIDA IBRAHIM';
  roles = ['Software Developer', 'Full Stack Engineer', 'Problem Solver'];
  currentRole = '';
  roleIndex = 0;

  ngOnInit() {
    this.typeRole();
  }

  typeRole() {
    let charIndex = 0;
    const currentText = this.roles[this.roleIndex];
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        this.currentRole += currentText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.deleteRole();
        }, 2000);
      }
    }, 100);
  }

  deleteRole() {
    const deleteInterval = setInterval(() => {
      if (this.currentRole.length > 0) {
        this.currentRole = this.currentRole.slice(0, -1);
      } else {
        clearInterval(deleteInterval);
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        setTimeout(() => {
          this.typeRole();
        }, 500);
      }
    }, 50);
  }

  scrollToContact() {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/resume/Shahida_Ibrahim_Resume.pdf';
  link.download = 'Shahida_Ibrahim_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}