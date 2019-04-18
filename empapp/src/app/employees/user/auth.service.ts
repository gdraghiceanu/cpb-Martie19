import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable(

)
export class AuthentificationService {
    currentUser: User;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Ion',
            lastName: 'Popescu',
            userName: userName,
            password: password
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}