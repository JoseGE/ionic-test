import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/interfaces/userLogin.intefaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.userService.clearUser();
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userId: [, Validators.required],
      password: [, Validators.required],
    });
  }
  async login() {
    if (this.loginForm.valid) {
      const userDataFrom = this.loginForm.value;
      const user: IUserLogin = {
        userId: userDataFrom.userId,
        password: userDataFrom.password,
      };
      const isLogin = await this.userService.login(user).catch((err:HttpErrorResponse )=>{
        if(err.status == 404){

          alert(err.error.message)
        }
      });
      if (isLogin) {
        this.router.navigate(['/products/list']);
      }
      return;
    }

    alert("Por favor complete los campos.")
  }
}
