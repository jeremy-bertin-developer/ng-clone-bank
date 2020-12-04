import { Component, OnInit } from '@angular/core';
import { Database } from 'src/app/core/util/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  mainPage: { buttonName: string; className: string }[];
  createAccountClass: string;
  marginBottonFiveClass: string;

  constructor() {}

  ngOnInit(): void {
    this.mainPage = Database.mainPage;
    this.createAccountClass = Database.mainPage[1].className;
    console.log(this.createAccountClass);
    this.marginBottonFiveClass = 'mb-5';
  }
}
