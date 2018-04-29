import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/services/user-service";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "login-nurse",
  templateUrl: "./login-nurse.component.html",
  styleUrls: ["./login-nurse.component.scss"]
})
export class LoginNurseComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private router: Router,
    private _userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  public onSubmit() {
    const user = this.loginFormGroup.value;

    this._userService.login(user).subscribe(res => {
      console.log(res);
    });
  }
}
