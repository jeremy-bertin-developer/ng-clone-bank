import { Component, OnInit } from '@angular/core';
import { Database } from 'src/app/core/util/database';

@Component({
  selector: 'app-signin-form-group',
  templateUrl: './signin-form-group.component.html',
  styleUrls: ['./signin-form-group.component.css'],
})
export class SigninFormGroupComponent implements OnInit {
  signinFormGroups: {
    labelName: string;
    type: string;
    name: string;
    placeHolder: string;
  }[];

  constructor() {}

  ngOnInit(): void {
    this.signinFormGroups = Database.signinFormGroups;
  }
}
