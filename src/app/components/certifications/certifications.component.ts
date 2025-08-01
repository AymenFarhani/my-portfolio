import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {

  dataService = inject(DataService);
    certifications  = this.dataService.getCertifications();

}
