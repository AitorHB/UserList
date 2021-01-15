import { Injectable } from '@angular/core';
import { UserAPI } from '../api/user.api';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private url = UserAPI.users;

    constructor(private http: HttpClient) { }

    /**
     * Returns an Observable element of type User
     * @return {Observable<User>}
     * @memberof UsersService
     */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }
}
