import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})
export class LoginPatientComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginClick(){
    this.router.navigate(["/secure-home"]);
  }
}
