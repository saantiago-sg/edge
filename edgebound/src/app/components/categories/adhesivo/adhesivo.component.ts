import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adhesivo',
  templateUrl: './adhesivo.component.html',
  styleUrls: ['./adhesivo.component.css']
})
export class AdhesivoComponent implements OnInit {

  constructor() { }

   // tslint:disable-next-line:no-inferrable-types
   arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){
    // let filtersBlock = document.getElementsByClassName('filters-block-items');
    // let buttonsDos = document.getElementsByClassName('filters-block-toggle');
    // for (let i = 0; i < filtersBlock.length; i++){
    //     filtersBlock[i].classList.toggle('active');
    // }
  }
}
