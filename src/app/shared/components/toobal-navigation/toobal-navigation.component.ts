import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toobal-navigation',
  templateUrl: './toobal-navigation.component.html',
  styleUrls: ['./toobal-navigation.component.scss']
})
export class ToobalNavigationComponent {
  constructor(private cookie: CookieService, private router: Router) { }

  handleLogout(): void {
    this.cookie.delete('USER_INFO');
    void this.router.navigate(['/home']);
  }
}
