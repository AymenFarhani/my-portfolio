import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  navItems = [
    { name: 'About', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  isNavCollapsed = true;
  isScrolled = false;

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
