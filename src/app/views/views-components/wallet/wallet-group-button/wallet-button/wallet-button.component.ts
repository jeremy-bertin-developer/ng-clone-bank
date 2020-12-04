import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-button',
  templateUrl: './wallet-button.component.html',
  styleUrls: ['./wallet-button.component.css'],
})
export class WalletButtonComponent implements OnInit {
  @Input()
  btnName: string;

  constructor() {}

  ngOnInit(): void {}
}
