import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

enum Tab {
  Patient = 1,
  Nurse
}
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tabs = Tab;

  selectedTab: Tab = Tab.Patient;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginClick() {
    this.router.navigate(['/secure-home']);
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
