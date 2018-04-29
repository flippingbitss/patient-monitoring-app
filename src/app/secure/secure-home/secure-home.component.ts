import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";

import { NgxSmartModalService } from "ngx-smart-modal";
import { CreateTipComponent } from "@app/secure/create-tip/create-tip.component";
import { UserService } from "@app/services/user-service";
import { User } from "@app/entities/User";

@Component({
  selector: "app-secure-home",
  templateUrl: "./secure-home.component.html",
  styleUrls: ["./secure-home.component.scss"]
})
export class SecureHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  users: User[];
  isLoading = true;

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    },null,()=>{
      this.isLoading = false;
    })
  }

  dialogInit() {}

  viewDetail() {
    this.router.navigate(["/patient-detail"]);
  }

}
