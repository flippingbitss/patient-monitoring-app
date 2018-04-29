import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "@app/services/user-service";
import { User } from "@app/entities/User";
import { Visit } from "@app/entities/Visit";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Vitals } from "@app/entities/Vitals";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "patient-detail",
  templateUrl: "./patient-detail.component.html",
  styleUrls: ["./patient-detail.component.scss"]
})
export class PatientDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: NgxSmartModalService
  ) {}

  isLoading = true;
  user: User;

  lastVisit: Visit;

  addVisitForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fetchPatient(params.id);
    });

    this.addVisitForm = this.formBuilder.group({
      bloodMin: "",
      bloodMax: "",
      temperature: "",
      heartRate: "",
      respiratoryRate: ""
    });
  }

  fetchPatient(id: string) {
    this.isLoading = true;
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      if (user.visits.length) {
        this.lastVisit = user.visits[user.visits.length - 1];
      }

      this.isLoading = false;
    });
  }

  addVisit() {
    const vitals = this.addVisitForm.value as Vitals;
    const visitData = new Visit(vitals);
    this.userService.addVisit(visitData, this.user.id).subscribe(visit => {
      this.modalService.closeLatestModal();
      this.fetchPatient(this.user.id);
    });
  }
}
