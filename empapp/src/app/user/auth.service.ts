import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser: User;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Ion',
            lastName: 'Pop'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
