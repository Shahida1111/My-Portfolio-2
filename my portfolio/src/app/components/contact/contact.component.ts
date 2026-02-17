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
      value: 'i.shahidaibrahim@gmail.com',
      link: 'mailto:i.shahidaibrahim@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+9472 068 9254',
      link: 'tel:+11234567890'
    },
    {
      icon: '📍',
      label: 'Location',
      value: ' Homagama, Colombo',
      link: null
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/Shahida1111'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHNZr0eaKUd-QAAAZxrHvGgIkL-Y9hqsHw-70SugMrEUiV3d_jdQVxQTQmnEYQbcHcITxGffePxVU2znQJ7-DMX2ok5mJMONd69ZSp3DU7xBOOLzDZ1p63KHhJNg5YHzj0Nkcs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshahida-ibrahim-301b11206%2F'
    },
    // {
    //   name: 'Twitter',
    //   icon: 'twitter',
    //   url: 'https://twitter.com/yourusername'
    // }
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