import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginFacadeService} from '../../facades/login.facade.service';
import {UserFacadeService} from '../../facades/user.facade.service';
import {UserProfile} from '../../store/user/interfaces';
import {Credentials} from '../../store/login/interfaces';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor( private loginFacade: LoginFacadeService, private userFacade: UserFacadeService) { }

  ngOnInit(): void {}

  get currentUser(): Observable<UserProfile> {
    return this.userFacade.getCurrentUser();
  }

  get credentials(): Observable<Credentials> {
    return this.loginFacade.getCredentials();
  }

  logout(): void {
    this.loginFacade.logout();
  }

}
