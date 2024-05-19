import { Component, Renderer2 } from '@angular/core';
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
  selectedImage: String | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.projects = (projectsData as any).default;
  }

  setSelectedProject(project: any) {
    this.selectedProject = project;
    if (this.selectedProject) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
    if (this.selectedProject) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  getSkillsForProject(projectSkills: number[]): any[] {
    return (skillsData as any).default.filter((skill: any) =>
      projectSkills.includes(skill?.id)
    );
  }
}
