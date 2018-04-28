import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureHomeComponent } from './secure-home/secure-home.component';
import { HomeHeaderComponent } from '@app/secure/home-header/home-header.component';
import { CreateTipComponent } from './create-tip/create-tip.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { SharedModule } from '@app/shared';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalDialogModule,
    NgxSmartModalModule.forChild(),
    
  ],
  declarations: [SecureHomeComponent,HomeHeaderComponent, CreateTipComponent, PatientDetailComponent]
})
export class SecureModule { }
