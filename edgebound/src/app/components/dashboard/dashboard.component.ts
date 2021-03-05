import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  mostrar = false;
  constructor() { }

  // tslint:disable-next-line:typedef
  showLogin(){
    const btnSignUp = document.querySelector('#btnSignUp')?.classList.remove('active');
    const btnLogin = document.querySelector('#btnLogin')?.classList.add('active');
    this.mostrar = false;
  }

  // tslint:disable-next-line:typedef
  showSignUp(){
    const btnLogin = document.querySelector('#btnLogin')?.classList.remove('active');
    const btnSignUp = document.querySelector('#btnSignUp')?.classList.add('active');
    this.mostrar = true;
  }

}
