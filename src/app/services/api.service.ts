import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IUserLogin } from "../interfaces/userLogin.intefaces";
@Injectable({
    providedIn:'root'
})

export class ApiService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

   
}