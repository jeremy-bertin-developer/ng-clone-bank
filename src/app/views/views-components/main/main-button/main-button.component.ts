import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css'],
})
export class MainButtonComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  class: string;

  constructor() {}

  ngOnInit(): void {}
}
