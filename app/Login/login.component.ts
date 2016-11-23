import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/Hero-Service/hero.service';
import { AuthService } from '../Services/Auth/auth.service';

import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';
@Component({
  templateUrl: 'app/Login/login.component.html',
  styleUrls: ['app/Login/login.component.css'],
  providers: [HeroService, SessionService, AuthService],
})
export class LoginComponent  { 
    model: Object = {};
    users: IUser[];
    hero:string;
    errorMessage: string;
	constructor(private _authService: AuthService, private _router:Router, private _sessionService: SessionService) {

    } 

    login(): void {
        console.log(this.model);
		this._authService.loginSimulation(this.model)
			.subscribe(response => {
                let hero = response;
                if(hero.length){
                    this._sessionService.save(hero);
                }
                this.model = {};
                this._router.navigate( ['profile'] );
            },
			error => this.errorMessage = <any>error);
	};
}

