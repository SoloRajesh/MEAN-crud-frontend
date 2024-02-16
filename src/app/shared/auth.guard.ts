// Example: AuthGuard in Angular
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatabaseService } from './service/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: DatabaseService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      alert("Please LogIn...");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
