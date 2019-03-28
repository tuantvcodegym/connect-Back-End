import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: User = {
    id: null,
    name: null,
    email: null,
    password: null
  };
  constructor(private userService: UserService) { }
  ngOnInit() {
  }
  updateUser(id) {
    this.userService.update(id).subscribe(data => this.user = data);
  }
  create() {
    this.userService.save(this.user).subscribe((data) => {
      alert('them moi thanh cong');
      console.log(data);
    }, (error) => {
      alert('that bai');
      console.log(error);
    });
  }
}
