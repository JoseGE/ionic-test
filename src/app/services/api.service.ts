import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductsModule } from "../pages/products/products.module";
@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    productList() {
        return this.http.get(`${this.apiUrl}/products/accounts`);
    }
   
}