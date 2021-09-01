import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from 'src/app/interfaces/userLogin.intefaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userID: [, Validators.required],
      password: [, Validators.required],
    });
  }
  login() {
    const user: IUserLogin = {
      userId: '00100010321',
      password: '1111',
    };
    this.apiService.login(user).subscribe((userReponse) => {});
  }
}
