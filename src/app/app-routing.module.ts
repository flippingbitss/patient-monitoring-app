import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";
import { SecureHomeComponent } from "@app/secure/secure-home/secure-home.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
