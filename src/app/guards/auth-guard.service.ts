import { Injectable } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  canActivate(): 
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }

    this.userService.isLoggedIn();

    return true;
  }
}
