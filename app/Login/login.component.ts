import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';
@Component({
  templateUrl: 'app/Login/login.component.html',
  styleUrls: ['app/Login/login.component.css'],
  providers: [HeroService, SessionService],
})
export class LoginComponent  { 
    model: Object = {};
    users: IUser[];
    hero:string;
    errorMessage: string;
	constructor(private _heroService: HeroService, private _router:Router, private _sessionService: SessionService) {

    } 

    login(): void {
        console.log(this.model);
		this._heroService.loginSimulation(this.model.name)
			.subscribe(response => {
                let hero = response;
                if(hero.length){
                    this._sessionService.save(hero);
                }
                console.log(hero);
                this.model = {};
                this._router.navigate( ['heroes'] );
            },
			error => this.errorMessage = <any>error);
	};
}

