import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "@app/services/user-service";
import { User } from "@app/entities/User";
import { Visit } from "@app/entities/Visit";

@Component({
  selector: "patient-detail",
  templateUrl: "./patient-detail.component.html",
  styleUrls: ["./patient-detail.component.scss"]
})
export class PatientDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService,private router:Router) {}

  isLoading = true;
  user: User;

  lastVisit: Visit;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fetchPatient(params.id);
    });
  }

  fetchPatient(id: string) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      if (user.visits.length) {
        this.lastVisit = user.visits[0];
      }

      this.isLoading = false;
    });
  }
  backToDashboard(){
    this.router.navigate(['/secure-home']);
  }
}
