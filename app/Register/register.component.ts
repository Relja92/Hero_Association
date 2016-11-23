import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { AuthService } from '../Services/Auth/auth.service';
import { SessionService } from '../Services/session.service'

import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/Register/register.component.html',
  styleUrls: ['app/Register/register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent  { 
    model: Object = {};
    hero:string;
    errorMessage: string;
	constructor(private _authService: AuthService, private _sessionService:SessionService, private _router:Router) {

    } 

    register(): void {
		this._authService.registerSimulation(this.model)
			.subscribe(response => {
                console.log(response);
                let hero = response
                this._sessionService.saveAfterRegister(hero);
                console.log(response);
                this.model = {};
                this._router.navigate( ['profile'] );
            },
			error =>{
                this.errorMessage = <any>error
            });
	};
}

