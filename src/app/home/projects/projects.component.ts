import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public loading: boolean = true;

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    this.getProjects();
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
}