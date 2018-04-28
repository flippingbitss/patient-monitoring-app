import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router} from '@angular/router';

import { NgxSmartModalService } from 'ngx-smart-modal';
import { CreateTipComponent } from '@app/secure/create-tip/create-tip.component';

@Component({
  selector: 'app-secure-home',
  templateUrl: './secure-home.component.html',
  styleUrls: ['./secure-home.component.scss']
})
export class SecureHomeComponent implements OnInit  {

  constructor(private router:Router,public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  dialogInit(){

  }

  }
