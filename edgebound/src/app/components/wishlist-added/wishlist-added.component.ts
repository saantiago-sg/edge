import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-added',
  templateUrl: './wishlist-added.component.html',
  styleUrls: ['./wishlist-added.component.css']
})
export class WishlistAddedComponent {

  constructor() { }

// tslint:disable-next-line:no-inferrable-types
items: any = ['0', '1', '2', '3', '4', '5'];

// tslint:disable-next-line:typedef
searchActive(){
const menuSearch = document.querySelector('.searchbox-mobile');
menuSearch?.classList.add('searchbox-active');
}

// tslint:disable-next-line:typedef
closeSearch(){
  const menuSearch = document.querySelector('.searchbox-mobile');
  menuSearch?.classList.remove('searchbox-active');
}
// tslint:disable-next-line:typedef
showMenu(){
  const navMobile = document.querySelector('.nav-mobile');
  navMobile?.classList.add('active');
}

// tslint:disable-next-line:typedef
volver(){
  const navMobile = document.querySelector('.nav-mobile');
  navMobile?.classList.remove('active');
}

// tslint:disable-next-line:typedef
showSubs(){
  const subsMobile = document.querySelector('.nav-mobile-subs');
  subsMobile?.classList.toggle('active-subs');
}

// tslint:disable-next-line:typedef
showSuggestions(){
const suggetion = document.querySelector('.searchbox--suggestions');
suggetion?.classList.toggle('show-suggetions');
}

}
