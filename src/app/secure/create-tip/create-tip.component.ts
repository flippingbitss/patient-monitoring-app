import { Component, OnInit } from '@angular/core';
import { IModalDialog } from 'ngx-modal-dialog';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-create-tip',
  templateUrl: './create-tip.component.html',
  styleUrls: ['./create-tip.component.scss']
})
export class CreateTipComponent implements OnInit,IModalDialog {

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }
  dialogInit(){
    
  }

}
