import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../interfaces/userLogin.intefaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(user: IUserLogin):Observable<any> {
      return this.http.post(`${this.apiUrl}/sign_in`,user)
  }
  saveUser(user) {
      localStorage.setItem(environment.userStorageName, JSON.stringify(user));
  }
  getAuthorizationToken() {
    return "";
  }
}
