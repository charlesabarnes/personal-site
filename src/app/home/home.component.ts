import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public liCount: number[] = Array(70).fill(4)

  constructor() { }

  ngOnInit() {
  }

}
