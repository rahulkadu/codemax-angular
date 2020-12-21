import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class InternalGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (!localStorage.getItem('userToken') && !localStorage.getItem('adminToken')) {
            console.log('InternalGuard 1');
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        }else{

            console.log('InternalGuard 2');
            return true;
        }
    }
}