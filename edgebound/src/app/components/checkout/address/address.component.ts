import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor() { }

  show: any = false;
  showTwo: any = false;


    // tslint:disable-next-line:typedef
    showForm(){
      this.show = true;
    }

    // tslint:disable-next-line:typedef
    hideForm(){
      this.show = false;
    }
    // tslint:disable-next-line:typedef
    showFormTwo(){
      this.showTwo = true;
      const btnDisabled = document.querySelector('.checkout-address-submit');
      const btnOn = document.querySelector('.btn-on');


      btnDisabled?.classList.add('checkout-address-submit-off');
      btnOn?.classList.add('btn-on-active');
    }

    // tslint:disable-next-line:typedef
    hideFormTwo(){
      this.showTwo = false;
    }

}
