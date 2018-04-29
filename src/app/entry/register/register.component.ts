import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/entry/user-service";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  
  constructor(private _userService : UserService) {
  
  }

  ngOnInit() {}

}
