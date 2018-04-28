import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";
import { SecureHomeComponent } from "@app/secure/secure-home/secure-home.component";
import { CreateTipComponent } from "@app/secure/create-tip/create-tip.component";
import { PatientDetailComponent } from "@app/secure/patient-detail/patient-detail.component";

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
    component:SecureHomeComponent
  },
  {
    path:"create-tip",
    component:CreateTipComponent
  },
  {
    path:"patient-detail",
    component:PatientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
