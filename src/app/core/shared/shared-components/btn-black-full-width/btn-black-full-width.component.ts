import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-black-full-width',
  templateUrl: './btn-black-full-width.component.html',
  styleUrls: ['./btn-black-full-width.component.css'],
})
export class BtnBlackFullWidthComponent implements OnInit {
  @Input()
  btnName: string;

  @Input()
  extraClass: string;

  constructor() {}

  ngOnInit(): void {}
}
