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

    // headers: any;



    constructor(private http: HttpClient) { }

    // setHeaderWithToken = () => {
    //     return {
    //         'Authorization': 'Bearer ' + localStorage.getItem('pwa_token'),
    //         'App-Origin': ApiURL.appOrigin,
    //         'Cache-Control': 'max-age=3600',
    //         'Content-Type': 'application/json'
    //     }
    // }

    getUserDetails = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');

        return this.http.get(this.productionURL + 'users', { headers: headers })
    }

    // userLogin = params => {
    //     return this.http.post(this.productionURL + 'user/login', { headers: {
    //         'Content-Type': 'application/json'
    //     }, params: params })
    // }

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

    submitContactUs = params => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json;');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));

        return this.http.post(this.productionURL + 'user/submit-contact-us', params,{
           headers: headers
        })
    }

    // userLogin = params => {
    //     return this.http.get(this.productionURL + 'users')
    // }

    // bookAppointment = params => {
    //     return this.http.post(ApiURL.BookAppointment, params, { headers: this.setHeaderWithToken() })
    // }

    // getWorksnRules = params => {
    //     return this.http.get(ApiURL.GetWorksnRules, { headers: this.setHeaderWithToken(), params: params })
    // }

    // applyCoupon = params => {
    //     return this.http.get(ApiURL.ApplyCoupon, { headers: this.setHeaderWithToken(), params: params })
    // }

    // bookVideoAppointment = params => {
    //     return this.http.post(ApiURL.BookVideoAppointment, params, { headers: this.setHeaderWithToken() })
    // }
    // bookChatAppointment = params => {
    //     return this.http.post(ApiURL.BookVideoAppointment, params, { headers: this.setHeaderWithToken() })
    // }

    // cancelAppointment = params => {
    //     return this.http.post(ApiURL.CancelAppointment, params, { headers: this.setHeaderWithToken() })
    // }

    // reScheduleConsult = params => {
    //     return this.http.post(ApiURL.ReBookConsut, params, { headers: this.setHeaderWithToken() })
    // }

    // checkDocAvailabilityIV = params => {
    //     return this.http.get(ApiURL.CheckDocAvailabilityIV, { headers: this.setHeaderWithToken(), params: params })
    // }

    // getDoctorRespone = params => {
    //     return this.http.get(ApiURL.GetDocResponseIV, { headers: this.setHeaderWithToken(), params: params })
    // }

    // checkKooKooId = params => {
    //     return this.http.get(ApiURL.CheckKookoIdIV, { headers: this.setHeaderWithToken(), params: params })
    // }

    // userRejection = params => {
    //     return this.http.get(ApiURL.RejectKookoId, { headers: this.setHeaderWithToken(), params: params })
    // }

    // userAcceptance = params => {
    //     return this.http.get(ApiURL.AcceptKookoId, { headers: this.setHeaderWithToken(), params: params })
    // }

   
}
