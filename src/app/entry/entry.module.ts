import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";
import { SharedModule } from "@app/shared";
import { EntryRoutingModule } from "@app/entry/entry-routing.module";
import { RegisterNurseComponent } from "@app/entry/register-nurse";
import { RegisterPatientComponent } from "@app/entry/register-patient";

@NgModule({
  imports: [CommonModule, SharedModule, EntryRoutingModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterNurseComponent,
    RegisterPatientComponent
  ]
})
export class EntryModule {}
