import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "@app/entities/User";
import { Observable } from "rxjs/Observable";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';
import { tap } from "rxjs/operators";
import { Tip } from "@app/entities/Tip";

const ROUTES = {
  auth: {
    login: "auth/login",
    register: "auth/register"
  },
  users: "users",
  visits: {
    add: "visit"
  },
  tips: "tips"
};

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class UserService {
  private KEY_USER = "key_user_pma";

  private API_BASE_URL = "https://pma-web-api.herokuapp.com/api/";
  // private API_BASE_URL = "http://localhost:3000/api/";

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
    const token = this.getToken();
    const headers = this.getAuthHeaders(token);

    return this.http
      .get(this.getApiUrl(ROUTES.users), { headers })
      .catch(this.handleErrorObservable);
  }

  private getAuthHeaders(token: string) {
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    });
  }

  private getToken() {
    return JSON.parse(window.localStorage.getItem(this.KEY_USER)).token;
  }

  logout(): void {
    window.localStorage.removeItem(this.KEY_USER);
    this.router.navigate(["/login"]);
  }

  public getUser(id: string): Observable<User> {
    const token = this.getToken();
    return this.http
      .get(this.getApiUrl(ROUTES.users + "/" + id), { headers: this.getAuthHeaders(token) })
      .catch(this.handleErrorObservable);
  }

  public getCurrentUser(): User {
    return JSON.parse(window.localStorage.getItem(this.KEY_USER)) as User;
  }

  public getTips() {
    const token = this.getToken();

    return this.http
      .get(this.getApiUrl(ROUTES.tips), { headers: this.getAuthHeaders(token) })
      .catch(this.handleErrorObservable);
  }

  public createTip(tip: Tip) {
    const token = this.getToken();

    return this.http
      .post(this.getApiUrl(ROUTES.tips), tip, { headers: this.getAuthHeaders(token) })
      .catch(this.handleErrorObservable);
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
    console.log(error.status, error.statusText,error);
    
    return Observable.throw(error.error.message);
  }
}
