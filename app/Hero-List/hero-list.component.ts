import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';


@Component({
  templateUrl: 'app/Hero-List/hero-list.component.html',
  styleUrls: ['app/Hero-List/hero-list.component.css'],
  providers: [HeroService],
})
export class HeroListComponent implements OnInit { 
    users: IUser[];
    errorMessage: string;
    searchCriteria: string ="";
    constructor(private _heroService: HeroService) {

    } 
            
    ngOnInit(): void {
		this._heroService.getUsers()
			.subscribe(users => this.users = users,
			error => this.errorMessage = <any>error);
	};

  seeDetails(id:string): void{
    console.log(id);
  }

	
}

