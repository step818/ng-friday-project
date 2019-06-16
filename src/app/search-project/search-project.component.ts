import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent  {
  @Input() childSearchRelevantProjectList: Project[];

  constructor() { }

  ngOnInit() {
  }

}
