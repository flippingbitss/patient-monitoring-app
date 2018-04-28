import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'login-nurse',
  templateUrl: './login-nurse.component.html',
  styleUrls: ['./login-nurse.component.scss']
})
export class LoginNurseComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  loginClick(){
    this.router.navigate(["/secure-home"]);
  }
}
