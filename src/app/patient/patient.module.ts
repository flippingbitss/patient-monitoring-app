import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeHeaderComponent } from "@app/secure/home-header/home-header.component";
import { DashboardComponent } from "@app/patient/dashboard/dashboard.component";
import { SecureModule } from "@app/secure/secure.module";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { ModalDialogModule } from "ngx-modal-dialog";

@NgModule({
  imports: [
    CommonModule,
    SecureModule,
    ModalDialogModule,
    NgxSmartModalModule.forChild()
  ],
  declarations: [DashboardComponent]
})
export class PatientModule {}
