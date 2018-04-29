import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";

import { NgxSmartModalService } from "ngx-smart-modal";
import { CreateTipComponent } from "@app/secure/create-tip/create-tip.component";
import { UserService } from "@app/services/user-service";
import { User } from "@app/entities/User";
import { forkJoin } from "rxjs/observable/forkJoin";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-secure-home",
  templateUrl: "./secure-home.component.html",
  styleUrls: ["./secure-home.component.scss"]
})
export class SecureHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  createTipForm: FormGroup;

  myself: User;
  tipCount: Number;

  users: User[];
  isLoading = true;

  ngOnInit() {
    this.myself = this.userService.getCurrentUser();
    this.fetchData();

    this.createTipForm = this.formBuilder.group({
      title: "",
      message: ""
    });
  }

  createTip() {
    const data = this.createTipForm.value;

    this.userService.createTip(data).subscribe(tip => {
      this.fetchData();
      this.ngxSmartModalService.getModal("tipModal").close();
    });
  }

  finishLoading = () => {
    this.isLoading = false;
  };

  private fetchData() {
    const tips$ = this.userService.getTips();
    const users$ = this.userService.getAll();
    forkJoin([tips$, users$]).subscribe(
      ([tips, users]) => {
        this.tipCount = tips.length;
        this.users = users;
      },
      this.finishLoading,
      this.finishLoading
    );
  }

  dialogInit() {}

  viewDetail(id: string) {
    this.router.navigate(["/patient-detail", id]);
  }
}
