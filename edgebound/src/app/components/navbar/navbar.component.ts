import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

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

}
