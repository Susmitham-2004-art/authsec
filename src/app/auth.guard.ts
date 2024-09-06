import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {


  constructor(private router: Router,private authService: DataService) {}


  
  canActivate(): boolean {
    const isAuthenticated = this.authService.isLoggedIn();
    console.log('Is Authenticated:', isAuthenticated); // Debugging log
    
    if (!isAuthenticated) {
      this.router.navigate(['/auth/signin']);
      return false;
    }
    return true;
  }
}