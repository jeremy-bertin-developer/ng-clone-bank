import { Component, OnInit } from '@angular/core';
import { Database } from 'src/app/core/util/database';

@Component({
  selector: 'app-signin-checkbox',
  templateUrl: './signin-checkbox.component.html',
  styleUrls: ['./signin-checkbox.component.css'],
})
export class SigninCheckboxComponent implements OnInit {
  signinCheckboxes: {
    id: string;
    for: string;
    labelName: string;
  }[];

  constructor() {}

  ngOnInit(): void {
    this.signinCheckboxes = Database.signinCheckboxes;
  }
}
