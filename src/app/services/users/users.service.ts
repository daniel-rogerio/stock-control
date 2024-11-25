import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/app/.env/enviroment';
import { UserSingUpRequest } from 'src/app/models/interfaces/users/UserSingUpRequest';
import { Observable } from 'rxjs';
import { UserSingUpResponse } from 'src/app/models/interfaces/users/UserSingUpResponse';
import { AuthRequest } from 'src/app/models/interfaces/users/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/users/auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = enviroment.API_URL

  constructor(private http: HttpClient, private cookie: CookieService) { }

  singUpUser(requestData: UserSingUpRequest): Observable<UserSingUpResponse> {
    return this.http.post<UserSingUpResponse>(`${this.API_URL}/user`, requestData);
  }

  authUser(requestData: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestData);
  }

  isLoggedIn(): boolean {
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ? true : false;
  }
}
