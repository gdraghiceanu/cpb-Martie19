import { Component } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    // styles: [`em { float: right; color:#E05C65; padding-left: 10px }  `],
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin: boolean;

    constructor(private authservice: AuthService, private router: Router) {}

    login( formVals: NgForm ) {
        console.log( formVals.form  );
        this.authservice.loginUser(formVals.value.userName, formVals.value.password);
        // this.router.navigate(['employees']);
    }

    cancel() {
        this.router.navigate(['employees']);
    }

}
