import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complementos-y-otros',
  templateUrl: './complementos-y-otros.component.html',
  styleUrls: ['./complementos-y-otros.component.css']
})
export class ComplementosYOtrosComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){

  }

  // tslint:disable-next-line:typedef
showFilter(){
  const filterContainer = document.querySelector('.filters-mobile-content');
  filterContainer?.classList.add('filters-mob-active');
}

// tslint:disable-next-line:typedef
limpiar(){
  const filterContainer = document.querySelector('.filters-mobile-content');
  filterContainer?.classList.remove('filters-mob-active');
}
// tslint:disable-next-line:typedef
order(){
  const orderby = document.querySelector('.filters-orderby-mob');
  orderby?.classList.add('filters-orderby-active');
}

// tslint:disable-next-line:typedef
orderOff(){
  const orderby = document.querySelector('.filters-orderby-mob');
  orderby?.classList.remove('filters-orderby-active');
}

}
