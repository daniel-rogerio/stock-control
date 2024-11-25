import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AuthRequest } from 'src/app/models/interfaces/users/auth/AuthRequest';
import { UserSingUpRequest } from 'src/app/models/interfaces/users/UserSingUpRequest';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  singUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UsersService,
    private cookieService: CookieService,
    private messageService: MessageService,
    private router: Router
  ) { }

  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.cookieService.set('USER_INFO', response?.token);
            this.loginForm.reset();
            this.router.navigate(['/dashboard'])
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `Bem vindo de volta ${response?.name}`,
              life: 2000
            });
          }
        },
        error: error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao fazer o login!',
            life: 2000
          });
          console.log(error)
        }
      });
    }
  }

  onSubmitSignUpForm(): void {
    if (this.singUpForm.value && this.singUpForm.valid) {
      this.userService.singUpUser(this.singUpForm.value as UserSingUpRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.singUpForm.reset();
            this.loginCard = true;
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `Usuário criado com sucesso!`,
              life: 2000
            });
          }
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao criar usuário!',
            life: 2000
          });
          console.log(error)
        }
      })
    }
  }
}
