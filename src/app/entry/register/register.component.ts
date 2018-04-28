import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/entry/user-service";

enum Tab {
  Patient = 1,
  Nurse
}
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  tabs = Tab;

  selectedTab: Tab = Tab.Patient;

  constructor(private _userService : UserService) {
  
  }

  ngOnInit() {}

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
