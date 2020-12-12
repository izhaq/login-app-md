import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ColumnConfig, TableConfig} from '../../components/table/table.component';
import {map} from 'rxjs/operators';
import {UserFacadeService} from '../../facades/user.facade.service';
import {User} from '../../store/user/interfaces';

const columns: Array<ColumnConfig<User>> = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email' }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private userFacade: UserFacadeService) { }

  ngOnInit(): void {
    this.userFacade.fetchAllUsers();
  }

  get config(): Observable<TableConfig<User>> {
    return this.userFacade.getAllUsers().pipe(
      map( (data) => ({ data, columns }) as TableConfig<User>));
  }

  onUserSelect(user: User): void {
    this.userFacade.fetchSelectedUser(user.email);
  }
}
