import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesorios-para-cocina',
  templateUrl: './accesorios-para-cocina.component.html',
  styleUrls: ['./accesorios-para-cocina.component.css']
})
export class AccesoriosParaCocinaComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){

  }
}
