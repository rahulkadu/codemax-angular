import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    // productionURL="http://localhost:8000/api/";
    productionURL="https://codemax-laravel.herokuapp.com/api/";

    constructor(private http: HttpClient) { }

    getUserDetails = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');

        return this.http.get(this.productionURL + 'users', { headers: headers })
    }

    userLogin = params => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');

        return this.http.post(this.productionURL + 'user/login', params,{
           headers: headers
        })
    }

    register = params => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');

        return this.http.post(this.productionURL + 'user/register', params,{
           headers: headers
        })
    }

    adminLogin = params => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');

        return this.http.post(this.productionURL + 'admin/login', params,{
           headers: headers
        })
    }

    addProduct = params => {

        let headers = new HttpHeaders();
        // headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('adminToken'));

        return this.http.post(this.productionURL + 'admin/add-product', params,{
           headers: headers
        })
    }

    getProductsAdmin = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('adminToken'));

        return this.http.get(this.productionURL + 'admin/list-product', { headers: headers })
    }

    getProductsUser = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));

        return this.http.get(this.productionURL + 'user/list-product', { headers: headers })
    }

    getProductCountUser = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));

        return this.http.get(this.productionURL + 'user/products-count', { headers: headers })
    }

    getProductCountAdmin = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('adminToken'));

        return this.http.get(this.productionURL + 'admin/products-count', { headers: headers })
    }

    submitContactUs = params => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));

        return this.http.post(this.productionURL + 'user/submit-contact-us', params,{
           headers: headers
        })
    }
}
