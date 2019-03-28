import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
// const headers  = new HttpHeaders({'Content-Type':  'application/json'});
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<User[]>('api/users');
  }
  delete(id: number) {
    return this.http.post<User[]>('api/users/' + id + '/delete', null);
  }
  update(id) {
    return this.http.post<User>('api/users/' + id + '/update', null);
  }
  save(user: User) {
    return this.http.post('api/users/create', user);
  }
}
