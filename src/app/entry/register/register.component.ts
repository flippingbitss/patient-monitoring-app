import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
