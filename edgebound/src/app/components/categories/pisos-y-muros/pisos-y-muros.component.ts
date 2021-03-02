import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pisos-y-muros',
  templateUrl: './pisos-y-muros.component.html',
  styleUrls: ['./pisos-y-muros.component.css']
})
export class PisosYMurosComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types
  arre: any = ['0', '1', '2', '3', '4', '5'];

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
dropdown(){

}


}
