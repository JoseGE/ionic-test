import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from 'src/app/interfaces/userLogin.intefaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userId: [, Validators.required],
      password: [, Validators.required],
    });
  }
  login() {
    return true;
    // const user: IUserLogin = {
    //   userId: '00100010321',
    //   password: '1111',
    // };
    // this.apiService.login(user).subscribe((userReponse) => {});
  }
}
