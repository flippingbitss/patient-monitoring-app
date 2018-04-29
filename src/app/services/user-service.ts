import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "@app/entities/User";
import { Observable } from "rxjs/Observable";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { tap } from "rxjs/operators";

const ROUTES = {
  auth: {
    login: "auth/login",
    register: "auth/register"
  },
  users: "users",
  visits: {
    add: "visit"
  }
};

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class UserService {
  private KEY_USER = "key_user_pma";

  private API_BASE_URL = "https://pma-web-api.herokuapp.com/api/";

  constructor(private http: HttpClient, private router: Router) {
    this.saveUser = this.saveUser.bind(this);
  }

  private getApiUrl(route: string): string {
    return `${this.API_BASE_URL}${route}`;
  }

  login(user: User): Observable<User> {
    return this.http
      .post(this.getApiUrl(ROUTES.auth.login), user, httpOptions)
      .pipe(tap(this.saveUser))
      .catch(this.handleErrorObservable);
  }

  register(user: User): Observable<User> {
    return this.http
      .post(this.getApiUrl(ROUTES.auth.register), user, httpOptions)
      .catch(this.handleErrorObservable);
  }

  getAll(): Observable<User[]> {
    const token = JSON.parse(window.localStorage.getItem(this.KEY_USER)).token;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    });

    return this.http
      .get(this.getApiUrl(ROUTES.users), { headers })
      .catch(this.handleErrorObservable);
  }

  logout(): void {
    window.localStorage.removeItem(this.KEY_USER);
    this.router.navigate(["/login"]);
  }

  public getCurrentUser(): User {
    return JSON.parse(window.localStorage.getItem(this.KEY_USER)) as User;
  }

  private saveUser(user: User): void {
    if (user) {
      return window.localStorage.setItem(this.KEY_USER, JSON.stringify(user));
    }
    console.error("Failed to save user to local storage - user is null");
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
