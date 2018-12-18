import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../Models/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  userInfo: User;
  private userSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.userInfo = this.authService.getUser();
    this.userSub = this.authService.getUserListner().subscribe(data => this.userInfo = data);
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
