import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return this.auth.user$.pipe(
      take(1),
      map(user => user && this.auth.isAdmin(user) ? true : false),
      tap((admin) => {
        if(!admin){
          this.router.navigate(['/adminlogin'])
          alert('admins only please login')
          console.log('Access Denied - Admin only');
          
        }
      })
    );
  }
  
}
