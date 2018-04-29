import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";
import { PatientService } from "@app/services/patient.service";
import { Tip } from "@app/entities/Tip";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ PatientService ]
})
export class DashboardComponent implements OnInit {

  public tips: Tip[];

  constructor(
    private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    private patientService: PatientService,
  ) { }

  ngOnInit() {
    this.getTips();
  }

  viewTips(){
    this.patientService.getAllTips().subscribe(
      val => {
        console.log("viewTips res = ", val);
        this.tips = val;
      },
      error => { console.error(error) }
    );
  }

  getTips(){
    this.patientService.getAllTips().subscribe(
      val => {
        console.log("viewTips res = ", val);
        this.tips = val;
      },
      error => { console.error(error) }
    );
  }

}
