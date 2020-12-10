import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserFacadeService} from '../../facades/user.facade.service';
import {UserProfile} from '../../store/user/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userFacade: UserFacadeService) { }

  ngOnInit(): void {
  }

  get selectedUser(): Observable<UserProfile> {
    return this.userFacade.getSelectedUser();
  }

}
