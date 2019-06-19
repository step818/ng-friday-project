import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers: [ProjectService]
})
export class ViewProjectComponent implements OnInit {
  projectId: string;
  projectToDisplay: Project;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = new Project(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.category,
        dataLastEmittedFromObserver.description, dataLastEmittedFromObserver.difficulty, dataLastEmittedFromObserver.steps)
    })
  }

}
