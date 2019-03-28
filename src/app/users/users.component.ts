import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(next => this.userList = next);
  }
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(next => this.userList = next );
    confirm('ban co chac muon xoa');
  }
  // updateUser(id) {
  //   this.userService.update(id).subscribe(next => this.userList = next);
  // }

}
