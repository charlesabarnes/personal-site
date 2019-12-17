import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ProjectsComponent } from './home/projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: '/' },
]

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoadingIndicatorComponent,
      ExperienceComponent,
      ProjectsComponent,
      PortfolioComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      NgxSmartModalModule.forRoot(),
      HttpClientModule
   ],
   providers: [
      DatePipe
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      LoadingIndicatorComponent,
      ExperienceComponent,
      ProjectsComponent,
      PortfolioComponent
   ]
})
export class AppModule { }
