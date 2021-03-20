import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  // tslint:disable-next-line:typedef
  hide(){
    const boxMessage = document.querySelector('.box-message');
    const botContainer = document.querySelector('.bot-container');
    boxMessage?.classList.add('box-message-off');
    botContainer?.classList.add('bot-container-active');
  }
  // tslint:disable-next-line:typedef
  showNotification(){
    const notification = document.querySelector('.notification');
    notification?.classList.add('active');
  }
  // tslint:disable-next-line:typedef
  close(){
    const notification = document.querySelector('.notification');
    notification?.classList.remove('active');
  }

}
