import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { differenceInDays } from 'date-fns'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public technologies: Technologies;
  public loading: boolean = true;

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    this.getJobExperience();
  }
  
  public datePercentage(technology: Technology) : string {
    let percent: number = differenceInDays(new Date(), new Date(technology.startDate)) / differenceInDays(new Date(), new Date('2010-01-01'));
    return `${Math.floor(percent * 100).toString()}%`;
  }
  

  private getJobExperience(): void {
    this.http.get('assets/experience.json').subscribe((technologies: Technologies) => {
      this.technologies = technologies;
      this.loading = false;
    });
  }

}

export interface Technologies {
  technologies: Technology[]
}
export interface Technology {
  name: string, 
  startDate: string
}