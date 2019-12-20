import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { differenceInDays } from 'date-fns'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public technologies: Technologies;
  public loading: boolean = true;

  constructor(private http: HttpClient, private date: DatePipe) { }

  public ngOnInit() {
    this.getJobExperience();
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
  percent: string
}