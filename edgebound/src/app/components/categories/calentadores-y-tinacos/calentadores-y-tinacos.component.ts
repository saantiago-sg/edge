import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calentadores-y-tinacos',
  templateUrl: './calentadores-y-tinacos.component.html',
  styleUrls: ['./calentadores-y-tinacos.component.css']
})
export class CalentadoresYTinacosComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){

  }
}
