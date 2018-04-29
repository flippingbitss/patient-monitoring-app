import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '@app/secure/home-header/home-header.component';
import { DashboardComponent } from "@app/patient/dashboard/dashboard.component";
import { SecureModule } from "@app/secure/secure.module";

@NgModule({
  imports: [
    CommonModule,
    SecureModule
  ],
  declarations: [
    HomeHeaderComponent,
    DashboardComponent
  ]
})

export class PatientModule { }
