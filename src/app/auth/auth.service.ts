import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import {User} from '../Models/User.model';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private user: User;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUser() {
    return this.user;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(username: string, password: string) {
    const authData: { username: string; password: string } = { username: username, password: password };
    this.http
      .post<{ succes: string, user_id: string, token: string, type: string }>(
        BACKEND_URL + '/login',
        authData
      )
      .subscribe(
        response => {

          const token = response.token;
          this.token = token;
          if (token) {
            this.isAuthenticated = true;
            console.log(response.user_id);

            this.http.get<User>(BACKEND_URL + '/getUserID/'+response.user_id)
              .subscribe((res) => {
                this.user = res;
                this.saveAuthData(token, this.user);
                this.authStatusListener.next(true);
                this.router.navigate(['/']);

              });
          }
        },
        error => {
          console.log(error);
          this.authStatusListener.next(false);
        }
      );
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    this.token = authInformation.token;
    this.isAuthenticated = true;
    this.user = authInformation.user;
    this.authStatusListener.next(true);
  }

  logout() {
    this.http.get(BACKEND_URL +'/logout/'+this.user.id).subscribe(() => {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      this.user = null;
      this.clearAuthData();
      this.router.navigate(['/']);
    });
  }

  private saveAuthData(token: string, user: object) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token) {
      return;
    }
    return {
      token: token,
      user: user
    };
  }
}
