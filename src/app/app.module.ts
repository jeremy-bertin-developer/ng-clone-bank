import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './views/views-components/main/main-button/main-button.component';
import { MainPageComponent } from './views/views-pages/main-page/main-page.component';
import { SigninPageComponent } from './views/views-pages/signin-page/signin-page.component';
import { SigninFormGroupComponent } from './views/views-components/signin/signin-card/signin-form-group/signin-form-group.component';
import { SigninCheckboxComponent } from './views/views-components/signin/signin-card/signin-checkbox/signin-checkbox.component';
import { SigninButtonComponent } from './views/views-components/signin/signin-card/signin-button/signin-button.component';
import { SigninCardComponent } from './views/views-components/signin/signin-card/signin-card.component';
import { FingerPrintPageComponent } from './views/views-pages/finger-print-page/finger-print-page.component';
import { FingerPrintCardComponent } from './views/views-components/finger-print/finger-print-card/finger-print-card.component';
import { DashboardPageComponent } from './views/views-pages/dashboard-page/dashboard-page.component';
import { RowSeparationComponent } from './core/shared/shared-components/row-separation/row-separation.component';
import { RowHeaderComponent } from './core/shared/shared-components/row-header/row-header.component';
import { DashboardCardAvatarComponent } from './views/views-components/dashboard/dashboard-card-container/dashboard-card-avatar/dashboard-card-avatar.component';
import { DashboardCardAccountsComponent } from './views/views-components/dashboard/dashboard-card-container/dashboard-card-accounts/dashboard-card-accounts.component';
import { DashboardCardMessagesComponent } from './views/views-components/dashboard/dashboard-card-container/dashboard-card-messages/dashboard-card-messages.component';
import { RowHeaderAccountComponent } from './core/shared/shared-components/row-header-account/row-header-account.component';
import { DashboardCardContainerComponent } from './views/views-components/dashboard/dashboard-card-container/dashboard-card-container.component';
import { LineSeparationComponent } from './core/shared/shared-components/line-separation/line-separation.component';
import { HttpClientModule } from '@angular/common/http';
import { WalletPageComponent } from './views/views-pages/wallet-page/wallet-page.component';
import { WalletGroupButtonComponent } from './views/views-components/wallet/wallet-group-button/wallet-group-button.component';
import { WalletButtonComponent } from './views/views-components/wallet/wallet-group-button/wallet-button/wallet-button.component';
import { WalletGroupCardsComponent } from './views/views-components/wallet/wallet-group-cards/wallet-group-cards.component';
import { WalletCardBalanceComponent } from './views/views-components/wallet/wallet-group-cards/wallet-card-balance/wallet-card-balance.component';
import { WalletCardTransactionsComponent } from './views/views-components/wallet/wallet-group-cards/wallet-card-transactions/wallet-card-transactions.component';
import { BtnBlackFullWidthComponent } from './core/shared/shared-components/btn-black-full-width/btn-black-full-width.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ModalComponent } from './core/shared/shared-components/modal/modal.component';
import { DialogComponent } from './core/shared/shared-components/modal/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    MainPageComponent,
    SigninPageComponent,
    SigninFormGroupComponent,
    SigninCheckboxComponent,
    SigninButtonComponent,
    SigninCardComponent,
    FingerPrintPageComponent,
    FingerPrintCardComponent,
    DashboardPageComponent,
    RowSeparationComponent,
    RowHeaderComponent,
    DashboardCardAvatarComponent,
    DashboardCardAccountsComponent,
    DashboardCardMessagesComponent,
    RowHeaderAccountComponent,
    DashboardCardContainerComponent,
    LineSeparationComponent,
    WalletPageComponent,
    WalletGroupButtonComponent,
    WalletButtonComponent,
    WalletGroupCardsComponent,
    WalletCardBalanceComponent,
    WalletCardTransactionsComponent,
    BtnBlackFullWidthComponent,
    ModalComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NoopAnimationsModule, MatSliderModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
