import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';

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
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
    LoadingIndicatorComponent,
    ExperienceComponent,
   ]
})
export class AppModule { }
