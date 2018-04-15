import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "@app/entry/login";
import { RegisterComponent } from "@app/entry/register";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule {}
