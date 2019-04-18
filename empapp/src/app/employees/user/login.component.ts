import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "./user.model";
import { AuthentificationService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   

    user: User;
    myMouseLogin: boolean;

    constructor(private auth: AuthentificationService, private myRouter: Router) {      

    }

    ngOnInit(): void {
        this.user = new User();
    }


    login( myForm: NgForm) {
        // console.log(myForm.form);
        //!!! take it as example...
        this.auth.loginUser(this.user.userName, myForm.value.password);
        this.myRouter.navigate(['employees']);
    }

    onCancel() {
        this.myRouter.navigate(['employees']);
    }
}