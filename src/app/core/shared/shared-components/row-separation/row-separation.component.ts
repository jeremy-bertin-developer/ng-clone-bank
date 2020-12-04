import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-separation',
  templateUrl: './row-separation.component.html',
  styleUrls: ['./row-separation.component.css'],
})
export class RowSeparationComponent implements OnInit {
  @Input()
  rowSize: string;

  @Input()
  extraClass: string;

  constructor() {}

  ngOnInit(): void {}
}
