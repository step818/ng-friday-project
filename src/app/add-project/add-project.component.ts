import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createNewProject(title: string, category: string, description: string, difficulty: string, steps: string[]) {
    var newProject: Project = new Project(title, category, description, difficulty, steps);
    this.projectService.addProject(newProject);
  }

}
