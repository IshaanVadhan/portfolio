import { Component } from '@angular/core';
import * as resumeData from '../../assets/resume.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  educations: any[] = [];
  positions: any[] = [];
  experiences: any[] = [];
  selectedProject: any;

  ngOnInit(): void {
    this.educations = (resumeData as any).default?.educations;
    this.positions = (resumeData as any).default?.positions;
    this.experiences = (resumeData as any).default?.experiences;
  }
}
