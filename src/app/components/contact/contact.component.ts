import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    linkedin: 'linkedin.com/in/aymen-farhani',
    github: 'github.com/AymenFarhani',
    medium: 'medium.com/@aymenfarhani28',
    phone: '+32 490 12 57 23',
    email: 'aymenfarhani28@gmail.com',
    address: 'Brussels, Belgium'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;
  isLoading = false;

   get phoneHref(): string {
    return 'tel:' + this.contactInfo.phone.replace(/\s/g, '');
  }

  submitForm() {
    if (this.isLoading) return;

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitted = true;
      this.isLoading = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }
}
