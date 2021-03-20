import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent {

  constructor() { }

  // tslint:disable-next-line:typedef
  verificar(){
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email)){
      const notificationtrue = document.querySelector('.email-true');
      notificationtrue?.classList.add('email-true-active');

      const reset = document.querySelector('.reset-form');
      reset?.classList.add('reset-form-off');
    }else{
      const notification = document.querySelector('.false');
      notification?.classList.add('active');
    }
  }

   // tslint:disable-next-line:typedef
   close(){
    const notification = document.querySelector('.notification');
    notification?.classList.remove('active');
  }
}
