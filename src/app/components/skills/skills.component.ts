import { Component, inject, OnInit } from '@angular/core';
import { Skill } from '../../models/project.model';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent{

  dataService = inject(DataService);
  skills: Skill[] = this.dataService.getSkills();

  categories  = this.dataService.getSkillCategories();

  activeCategory: string = 'Principal Skills';

  filterSkills(category: string): void {
    this.activeCategory = category;
  }

  getFilteredSkills(): Skill[] {
    return this.skills.filter(skill => skill.category === this.activeCategory);
  }

  getProgressWidth(level: number | undefined): string {
    return level ? `${(level / 5) * 100}%` : '100%';
  }
}
