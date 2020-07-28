import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = 'Users';
  users: IUser[] = [];


  constructor() { }

  ngOnInit(): void {
    this.users = this.getUserList();
  }
  getUserList(): IUser[] {
    const users = [
      {
        id: 1,
        name: 'nam',
        email: 'nam@gmail.com'
      },
      {
        id: 2,
        name: 'vinh',
        email: 'vinh@gmail.com'
      },
      {
        id: 3,
        name: 'phong',
        email: 'phong@gmail.com'
      }
    ];
    return users;
  }
  // tslint:disable-next-line:typedef
  search(event) {
    const keyword = event.target.value;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.getUserList();
  }
  // tslint:disable-next-line:typedef
  filterByKeyword(keyword) {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.indexOf(keyword) != -1;
    });
  }
  // tslint:disable-next-line:typedef
  delete(id) {
    const userDeleted = [];
    this.users.map(user => {
      // tslint:disable-next-line:triple-equals
      if (user.id != id) {
        userDeleted.push(user);
      }
    });
    this.users = userDeleted;
  }
}
