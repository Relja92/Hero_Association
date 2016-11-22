import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/Hero-Add/hero-add.component.html',
  styleUrls: ['app/Hero-Add/hero-add.component.css'],
  providers: [HeroService],
})
export class HeroAddComponent  { 
    model: Object = {};
    users: IUser[];
    hero:string;
    errorMessage: string;
	constructor(private _heroService: HeroService, private _router:Router) {

    } 

    addHero(): void {
		this._heroService.addHero(this.model)
			.subscribe(response => {
                this.users = response;
                this.model = {};
                this._router.navigate( ['heroes'] );
            },
			error => this.errorMessage = <any>error);
	};
}

