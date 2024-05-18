import { Component } from '@angular/core';
import * as projectsData from '../../assets/projects.json';
import * as skillsData from '../../assets/skills.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: any[] = [];
  selectedProject: any;

  ngOnInit(): void {
    this.projects = (projectsData as any).default;
  }

  setSelectedProject(project: any) {
    this.selectedProject = project;
  }

  getSkillsForProject(projectSkills: number[]): any[] {
    return (skillsData as any).default.filter((skill: any) =>
      projectSkills.includes(skill?.id)
    );
  }
}
