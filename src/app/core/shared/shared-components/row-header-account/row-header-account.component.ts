import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-header-account',
  templateUrl: './row-header-account.component.html',
  styleUrls: ['./row-header-account.component.css'],
})
export class RowHeaderAccountComponent implements OnInit {
  @Input()
  headerAccountTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
