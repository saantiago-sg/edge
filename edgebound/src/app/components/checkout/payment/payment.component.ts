import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor() { }

  paypal: any = false;
  cards: any = false;
  bbva: any = false;
  citi: any = false;
  oxxo: any = false;




  // tslint:disable-next-line:typedef
  paypalShow(){
  const pdfault = document.querySelector('.payment-default');
  pdfault?.classList.add('payment-default-off');

  this.cards = false;
  this.bbva = false;
  this.paypal = true;
  this.oxxo = false;
  this.citi = false;
  }

  // tslint:disable-next-line:typedef
  cardsShow(){
  const pdfault = document.querySelector('.payment-default');
  pdfault?.classList.add('payment-default-off');

  this.cards = true;
  this.bbva = false;
  this.paypal = false;
  this.oxxo = false;
  this.citi = false;
  }

  // tslint:disable-next-line:typedef
  bbvaShow(){
    const pdfault = document.querySelector('.payment-default');
    pdfault?.classList.add('payment-default-off');

    this.bbva = true;
    this.cards = false;
    this.paypal = false;
    this.oxxo = false;
    this.citi = false;

  }

  // tslint:disable-next-line:typedef
  citiShow(){
    const pdfault = document.querySelector('.payment-default');
    pdfault?.classList.add('payment-default-off');

    this.citi = true;
    this.bbva = false;
    this.cards = false;
    this.paypal = false;
    this.oxxo = false;

  }

  // tslint:disable-next-line:typedef
  oxxoShow(){
    const pdfault = document.querySelector('.payment-default');
    pdfault?.classList.add('payment-default-off');

    this.oxxo = true;
    this.bbva = false;
    this.cards = false;
    this.paypal = false;
    this.citi = false;
  }

}
