import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLogged = false;
    isLoginFail = false;
    loginUser!: LoginUser;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errMsg!: string;

    constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLoginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    onLogin(): void {
        this.loginUser = new LoginUser(this.nombreUsuario, this.password);
        this.authService.login(this.loginUser).subscribe({
            next: (v) => {
                this.isLogged = true;
                this.isLoginFail = false;
                this.tokenService.setToken(v.token);
                this.tokenService.setUsername(v.nombreUsuario);
                this.tokenService.setAuthorities(v.authorities);
                this.roles = v.authorities;
                this.router.navigate(['']);
            },
            error: (e) => {
                this.isLogged = false;
                this.isLoginFail = true;
                this.errMsg = e.error.mensaje;
                console.log(this.errMsg);
            }
        })
    }
}
