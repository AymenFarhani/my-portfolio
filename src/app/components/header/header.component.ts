import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  isNavCollapsed = true;

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  isActive(path: string): boolean {
    return window.location.pathname === path;
  }

  // Close navbar when clicking outside on mobile
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && !this.isNavCollapsed) {
      this.isNavCollapsed = true;
    }
  }
}
