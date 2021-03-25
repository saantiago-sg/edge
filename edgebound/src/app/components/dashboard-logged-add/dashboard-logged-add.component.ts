import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-logged-add',
  templateUrl: './dashboard-logged-add.component.html',
  styleUrls: ['./dashboard-logged-add.component.css']
})
export class DashboardLoggedAddComponent {

  constructor() { }

  // tslint:disable-next-line:typedef
  toggleEdit(){
  const profileForm = document.querySelector('.dashboard-profile-form');
  profileForm?.classList.toggle('toggle-edit');
  }

}
