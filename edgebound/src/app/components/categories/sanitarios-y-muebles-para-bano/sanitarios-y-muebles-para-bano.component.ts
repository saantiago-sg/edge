import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanitarios-y-muebles-para-bano',
  templateUrl: './sanitarios-y-muebles-para-bano.component.html',
  styleUrls: ['./sanitarios-y-muebles-para-bano.component.css']
})
export class SanitariosYMueblesParaBanoComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  dropdown(){

  }

}
