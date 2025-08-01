import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
// Import other components as needed

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '**', redirectTo: '' }
];
