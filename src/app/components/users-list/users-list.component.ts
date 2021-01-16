import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    userList: User[] = [];

    constructor(
        private userService: UsersService
    ) { }

    ngOnInit(): void {
        this.getUserList();
    }

    /**
     * Get all Users from service and save on 'userList'
     * else return error
     * @memberof UsersListComponent
     */
    getUserList() {
        this.userService.getUsers()
            .subscribe((user: User[]) => {
                this.userList = user;
            }, err => {
                console.log(err);
            });
    }

}
