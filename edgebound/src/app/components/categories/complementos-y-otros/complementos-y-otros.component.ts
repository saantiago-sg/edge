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
}
