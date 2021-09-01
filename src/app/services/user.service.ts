import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';
import { IUserLogin } from '../interfaces/userLogin.inteface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(user: IUserLogin):Promise<any> {
      return new Promise((resolve, reject)=>{
        this.http.post(`${this.apiUrl}/sign_in`,user).subscribe(userResponse=>{
          if(userResponse) {
            this.saveUser(userResponse);
            resolve(true);
          }
          reject(false);
        },err=>{
          reject(err);
        })
      })
  }

  saveUser(user) {
      localStorage.setItem(environment.userStorageName, JSON.stringify(user));
  }

  userLoguedData(): IUser {
    return JSON.parse(localStorage.getItem(environment.userStorageName));
  }

  getAuthorizationToken() {
   return this.userLoguedData()?.access_token;
  }
}
