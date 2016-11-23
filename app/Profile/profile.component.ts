import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/Hero-Service/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl:'app/Profile/profile.component.html',
  styleUrls: ['app/Profile/profile.component.css'],
  providers: [HeroService],
})
export class ProfileComponent {     
    hero: IUser[];
    errorMessage: string;
     
    constructor(private _heroService: HeroService, public route: ActivatedRoute) {

    } 

    getProfile(): void{
        this._heroService.getProfile()
            .subscribe(response => {
            this.hero=response;
        },
        error => this.errorMessage = <any>error);
    }
    ngOnInit(): void {
      this.getProfile();
	};

}
