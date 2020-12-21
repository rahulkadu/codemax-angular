import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (localStorage.getItem('userToken') || localStorage.getItem('adminToken')) {
            console.log('LoginGuard 1');
            if (localStorage.getItem('userToken'))
                this.router.navigate(['/dashboard/home']);
            else
                this.router.navigate(['/admin-dashboard/products']);

            return false;
        }else{

            console.log('LoginGuard 2');
            return true;
        }

        // if (!localStorage.getItem('adminToken')) {
        //     console.log('AdminUserLoginGuard 1');
        //     return true;
        // }else{
        //     console.log('AdminUserLoginGuard 2');
        //     this.router.navigate(['/admin-dashboard/home']);
        //     return false;
        // }
    }
}