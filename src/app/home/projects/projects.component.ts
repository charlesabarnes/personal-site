import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public loading: boolean = true;

  constructor(private http: HttpClient, private ngxSmartModalService: NgxSmartModalService) { }

  public ngOnInit() {
    this.getProjects();
  }
  
  /**
   * openModal
   */
  public openModal(project: Project) {
    this.ngxSmartModalService.resetModalData('imageModal');
    this.ngxSmartModalService.setModalData(project.image, 'imageModal');
    this.ngxSmartModalService.create('imageModal',`blah`).open();
  }

  private getProjects(): void {
    this.http.get('assets/projects.json').subscribe((projects: Project[]) => {
      this.projects = projects;
      this.loading = false;
    });
  }

}

export interface Project {
    name: string;
    url: string;
    image: string;
    tools: string[];
    role: string[],
    year: string;
    description: string;
    users?: string;
}