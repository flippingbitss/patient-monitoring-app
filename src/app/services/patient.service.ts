import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Http, Headers, Response } from "@angular/http";
import {User} from "@app/entities/User";
import {Tip} from "@app/entities/Tip";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router, ROUTES} from "@angular/router";

const ROUTES = {
  auth: {
    login: "auth/login",
    register: "auth/register"
  },
  users: "users",
  visits: {
    add: "visit"
  },
  allTips: "tips"
};

// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" })
// };

@Injectable()
export class PatientService {

  private KEY_USER = "key_user_pma";
  private API_BASE_URL = "https://pma-web-api.herokuapp.com/api/";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllTips(): Observable<Tip[]> {
    const token = JSON.parse(window.localStorage.getItem(this.KEY_USER)).token;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    });

    return this.http
      .get(this.getApiUrl(ROUTES.allTips), { headers })
      .catch(this.handleErrorObservable);
  }

  private getApiUrl(route: string): string {
    return `${this.API_BASE_URL}${route}`;
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
