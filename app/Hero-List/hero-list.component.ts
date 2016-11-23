import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/Hero-Service/hero.service';


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
    loadAllHeroes():void{
      this._heroService.getUsers()
        .subscribe(response => {
          this.users = response
        },
        error => this.errorMessage = <any>error);
    }       
    ngOnInit(): void {
      this.loadAllHeroes();
	  };

  deleteHero(id:string): void{
    this._heroService.deleteHero(id)
			.subscribe(response => {
          console.log(response);
          this.loadAllHeroes();
      },
			error => this.errorMessage = <any>error);
  }

	
}

