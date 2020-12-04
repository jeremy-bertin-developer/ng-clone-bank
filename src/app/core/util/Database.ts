import { identifierModuleUrl } from '@angular/compiler';

export class Database {
  public static mainPage: { buttonName: string; className: string }[] = [
    {
      buttonName: 'Signin with your Account',
      className: 'signin-button-main',
    },
    {
      buttonName: 'Open an Account',
      className: 'open-account-button-main mb-5',
    },
  ];

  public static signinFormGroups: {
    labelName: string;
    type: string;
    name: string;
    placeHolder: string;
  }[] = [
    {
      labelName: 'Bank ID',
      type: 'number',
      name: 'bankId',
      placeHolder: 'Enter your bank ID',
    },
    {
      labelName: 'Password',
      type: 'password',
      name: 'password',
      placeHolder: 'Enter your password',
    },
  ];

  public static signinCheckboxes: {
    id: string;
    for: string;
    labelName: string;
  }[] = [
    { id: '1', for: '1', labelName: 'Remember my ID for future logins' },
    {
      id: '2',
      for: '2',
      labelName: 'Use fingerprint recognition next time',
    },
  ];

  public static walletButtonNames: string[] = ['credit card', 'saving'];

  public static tableRowCellData: {
    imgSrc: string;
    date: string;
    merchant: string;
    amount: string;
  }[] = [
    {
      imgSrc: 'assets/img/picture-h-m.jpg',
      date: '24 Sep. 19',
      merchant: 'H&M Wien',
      amount: '$ 29.99',
    },
    {
      imgSrc: 'assets/img/picture-nike.png',
      date: '10Jul. 19',
      merchant: 'NikeWien',
      amount: '$ 120.00',
    },
    {
      imgSrc: 'assets/img/picture-amazon.jpg',
      date: '07Jul. 19',
      merchant: 'Amazon.de',
      amount: '$ 39.99',
    },
  ];
}
