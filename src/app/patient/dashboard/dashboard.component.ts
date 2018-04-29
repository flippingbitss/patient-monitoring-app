import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

}
