import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data/data.service';
import { IRequestSettings } from '../data/from-request';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent {
    login_Form: FormGroup;
    email = new FormControl("", Validators.required);
    password = new FormControl("", Validators.required);
    pageTitle= "Login / Register"
    constructor(fb: FormBuilder) {
        this.login_Form = fb.group({
            "email": this.email,
            "password": this.password
        });
    }

    doLogin(values: any): void {
        if (this.login_Form.valid) {
            console.log(values);
        }
    }
}