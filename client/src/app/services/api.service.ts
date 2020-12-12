import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserProfile, Users} from '../store/user/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<UserProfile> {
    return this.http.post<UserProfile>('api/login', { email, password });
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>('api/signup', { ...user });
  }

  getUserProfile(userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`api/getUserProfile/${userId}`);
  }

  getUsers(): Observable<Users> {
    return this.http.get<Users>('api/users');
  }
}
