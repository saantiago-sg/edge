import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

// tslint:disable-next-line:typedef
addCart(){
  const productAdded = document.querySelector('.product-added_to_cart');
  productAdded?.classList.add('active-cart');
}
// tslint:disable-next-line:typedef
seguirComprando(){
  const productAdded = document.querySelector('.product-added_to_cart');
  productAdded?.classList.remove('active-cart');
}

// tslint:disable-next-line:typedef
calcular(){
  const calcularResult = document.querySelector('.product-calculator-result');
  calcularResult?.classList.add('result-active');
}

}
