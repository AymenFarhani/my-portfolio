import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  phoneNumber = '+32 490 12 57 23';
  email = 'aymenfarhani28@gmail.com';
  socialLinks = [
    { icon: 'bi-linkedin', url: 'https://linkedin.com/in/aymen-farhani' },
    { icon: 'bi-github', url: 'https://github.com/AymenFarhani' },
    { icon: 'bi-envelope', url: 'mailto:aymenfarhani28@gmail.com' }
  ];
}
