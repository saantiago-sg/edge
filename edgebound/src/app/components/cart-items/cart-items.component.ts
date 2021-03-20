import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent{

  constructor() { }
  // tslint:disable-next-line:typedef
  verificarCupon(){
    const inpCupon = (document.querySelector('#inpCupon') as HTMLInputElement).value;
    if (inpCupon === '0'){
      const notification = document.querySelector('.notification');
      notification?.classList.add('active');
    }else if (inpCupon === '1'){
      const popUpTrue = document.querySelector('.cart-breakdown-coupon');
      const sec = document.querySelector('.sec');
      const ico = document.querySelector('.cart-coupon-btn_default');
      const icoSucess = document.querySelector('.cart-coupon-btn_success');

      popUpTrue?.classList.add('cart-breakdown-coupon-active');
      sec?.classList.add('cart-breakdown-coupon-active');
      ico?.classList.add('ico-off');
      icoSucess?.classList.add('cart-coupon-btn_success-active');

    }
  }

  // tslint:disable-next-line:typedef
  calcularEnvio(event: any){
    // tslint:disable-next-line:prefer-const
    event.preventDefault();
    const inpEnvio = (document.querySelector('#inpEnvio') as HTMLInputElement).value;
    if (inpEnvio === '0'){
    const shipInvalid = document.querySelector('.cart-shipping-invalid');
    const btnEnvio = document.querySelector('.btn-envio');
    const divReenvio = document.querySelector('.div-reenvio');

    shipInvalid?.classList.add('cart-shipping-invalid-active');
    btnEnvio?.classList.add('btn-envio-off');
    divReenvio?.classList.add('btn-reenvio-active');
    }else if (inpEnvio === '1'){
      const zipCode = document.querySelector('.cart-breakdown-zipcode');
      const breackTotal = document.querySelector('.cart-breakdown-total');
      const cartButtons = document.querySelector('.cart-buttons');
      const cartShip = document.querySelector('.cart-shipping');

      zipCode?.classList.add('cart-breakdown-zipcode-active');
      breackTotal?.classList.add('cart-breakdown-total-active');
      cartButtons?.classList.add('cart-buttons-active');
      cartShip?.classList.add('cart-shipping-off');
    }
  }

  // tslint:disable-next-line:typedef
  reply(){
    const shipInvalid = document.querySelector('.cart-shipping-invalid');
    const divReenvio = document.querySelector('.div-reenvio');
    const btnEnvio = document.querySelector('.btn-envio');

    shipInvalid?.classList.remove('cart-shipping-invalid-active');
    divReenvio?.classList.remove('btn-reenvio-active');
    btnEnvio?.classList.remove('btn-envio-off');
  }

  // tslint:disable-next-line:typedef
  cambiar(){
    const zipCode = document.querySelector('.cart-breakdown-zipcode');
    const breackTotal = document.querySelector('.cart-breakdown-total');
    const cartButtons = document.querySelector('.cart-buttons');
    const cartShip = document.querySelector('.cart-shipping');

    zipCode?.classList.remove('cart-breakdown-zipcode-active');
    breackTotal?.classList.remove('cart-breakdown-total-active');
    cartButtons?.classList.remove('cart-buttons-active');
    cartShip?.classList.remove('cart-shipping-off');
  }

  // tslint:disable-next-line:typedef
  closeCupon(){
    const cupon = document.querySelector('.cart-breakdown-coupon');
    const sec = document.querySelector('.sec');
    const ico = document.querySelector('.cart-coupon-btn_default');
    const icoSucess = document.querySelector('.cart-coupon-btn_success');

    cupon?.classList.remove('cart-breakdown-coupon-active');
    sec?.classList.remove('cart-breakdown-coupon-active');
    ico?.classList.remove('ico-off');
    icoSucess?.classList.remove('cart-coupon-btn_success-active');
  }

  // tslint:disable-next-line:typedef
  // close(){
  //   const popUpFalse = document.querySelector('.notification-container');
  //   popUpFalse?.classList.remove('notification-active');
  // }

    // tslint:disable-next-line:typedef
    showNotification(){
      const notification = document.querySelector('.notification');
      notification?.classList.add('active');
    }
    // tslint:disable-next-line:typedef
    close(){
      const notification = document.querySelector('.notification');
      notification?.classList.remove('active');
    }
}
