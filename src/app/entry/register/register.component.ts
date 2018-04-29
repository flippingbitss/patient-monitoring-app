import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/services/user-service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { User } from "@app/entities/User";
import { Router } from "@angular/router";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  registerFormGroup : FormGroup;
  constructor(private _userService : UserService, private formBuilder: FormBuilder,private router:Router) {
    this.createForm();
  }

  ngOnInit() {}

  createForm(){
    this.registerFormGroup = this.formBuilder.group({
      firstName: '',
      lastName:'',
      email:'',
      dob:'',
      password:'',
      confirmPassword:''
    });
  }
  
  OnSubmit() {
    console.log(this.registerFormGroup.value);
    const user = this.registerFormGroup.value as User;
    this._userService.register(user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
  }
}
