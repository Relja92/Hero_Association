import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';


@Component({
  templateUrl: 'app/Home/home.component.html',
  styleUrls: ['app/Home/home.component.css'],
  providers: [HeroService],
})
export class HomeComponent  { 
    model: Object = {};
    users: IUser[];
    hero:string;
    errorMessage: string;
	constructor(private _heroService: HeroService) {

    } 

    addHero(): void {
		this._heroService.addHero(this.model)
			.subscribe(response => {
                this.users = response;
                this.model = {};
            },
			error => this.errorMessage = <any>error);
	};
}

