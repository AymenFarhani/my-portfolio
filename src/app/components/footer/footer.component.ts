import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: 'bi-linkedin', url: 'https://linkedin.com/in/aymen-farhani' },
    { icon: 'bi-github', url: 'https://github.com/AymenFarhani' },
    { icon: 'bi-envelope', url: 'mailto:aymenfarhani28@gmail.com' }
  ];
}
