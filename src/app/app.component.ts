import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelToTest } from './model.totest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-clone-bank';
  httpRequest: ModelToTest;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<ModelToTest>(
        'https://my-bank-project-6dd73.firebaseio.com/dummy-datas.json'
      )
      .subscribe((data) => {
        this.httpRequest = data;
        console.log(this.httpRequest);
      });
  }
}
