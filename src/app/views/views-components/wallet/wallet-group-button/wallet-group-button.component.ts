import { Component, OnInit } from '@angular/core';
import { Database } from 'src/app/core/util/database';

@Component({
  selector: 'app-wallet-group-button',
  templateUrl: './wallet-group-button.component.html',
  styleUrls: ['./wallet-group-button.component.css'],
})
export class WalletGroupButtonComponent implements OnInit {
  buttonNames: string[];

  constructor() {}

  ngOnInit(): void {
    this.buttonNames = Database.walletButtonNames;
  }
}
