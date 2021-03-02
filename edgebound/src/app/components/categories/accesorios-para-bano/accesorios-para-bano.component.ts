import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesorios-para-bano',
  templateUrl: './accesorios-para-bano.component.html',
  styleUrls: ['./accesorios-para-bano.component.css']
})
export class AccesoriosParaBanoComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){

  }
}
