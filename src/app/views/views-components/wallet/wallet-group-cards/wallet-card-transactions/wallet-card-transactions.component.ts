import { Database } from 'src/app/core/util/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-card-transactions',
  templateUrl: './wallet-card-transactions.component.html',
  styleUrls: ['./wallet-card-transactions.component.css'],
})
export class WalletCardTransactionsComponent implements OnInit {
  tableRowCellData: {
    imgSrc: string;
    date: string;
    merchant: string;
    amount: string;
  }[];

  constructor() {}

  ngOnInit(): void {
    this.tableRowCellData = Database.tableRowCellData;
  }
}
