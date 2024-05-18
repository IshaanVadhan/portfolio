import { Component } from '@angular/core';
import * as skillsData from '../../assets/skills.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skills: any[] = [];

  ngOnInit(): void {
    this.skills = (skillsData as any).default;
  }
}
