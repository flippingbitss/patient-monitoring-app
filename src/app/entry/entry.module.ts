import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";
import { SharedModule } from "@app/shared";
import { EntryRoutingModule } from "@app/entry/entry-routing.module";
import { LoginNurseComponent } from './login-nurse/login-nurse.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';

@NgModule({
  imports: [CommonModule, SharedModule, EntryRoutingModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginNurseComponent,
    LoginPatientComponent,
  ]
})
export class EntryModule {}
