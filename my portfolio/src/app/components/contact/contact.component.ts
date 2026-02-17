import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Your City, Country',
      link: null
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/yourusername'
    }
  ];

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);

      // TODO: Implement actual form submission logic
      // You can use services like EmailJS, Formspree, or your own backend
      console.log('Form submitted:', this.formData);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.message
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}