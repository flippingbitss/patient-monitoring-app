import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/services/user-service";

@Component({
  selector: "home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.scss"]
})
export class HomeHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  public getUsername() {
    const user = this.userService.getCurrentUser();
    if (!user) return "Username";
    return user.firstName + " " + user.lastName;
  }

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }
}
