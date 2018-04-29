import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";
import { SecureHomeComponent } from "@app/secure/secure-home/secure-home.component";
import { CreateTipComponent } from "@app/secure/create-tip/create-tip.component";
import { PatientDetailComponent } from "@app/secure/patient-detail/patient-detail.component";
import {DashboardComponent} from "@app/patient/dashboard/dashboard.component";
import { AuthGuard } from "@app/auth.guard";
import { combineAll } from "rxjs/operators";

const routes: Routes = [
  {
    path: "",
    pathMatch:"full",
    redirectTo: "login"
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "register",
    component:RegisterComponent
  },
  {
    path:"secure-home",
    component:SecureHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"create-tip",
    component:CreateTipComponent
  },
  {
    path:"patient-detail/:id",
    component:PatientDetailComponent
  },
  {
    path:"patient",
    component:DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
