import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl:'app/Hero-Update/hero-update.component.html',
  styleUrls: ['app/Hero-Update/hero-update.component.css'],
  providers: [HeroService],
})
export class HeroUpdateComponent {     
    user: IUser[];
    errorMessage: string;
    model: Object = {};
    constructor(private _heroService: HeroService, public route: ActivatedRoute) {

    } 
    
  private sub: any;      // -> Subscriber
  private id: string;  // -> var I want to init with my route parameter        
    ngOnInit(): void {
          // get URL parameters
        this.sub = this.route.params
        .subscribe(params => {
            this.id = params['id']; // --> Name must match wanted paramter
    });
		this._heroService.getSingleUser(this.id)
			.subscribe(user => this.model = user,
			error => this.errorMessage = <any>error);
	};

    updateHero(){
        this._heroService.updateHero(this.id,this.model)
        .subscribe(response => {
            console.log(response);
        },
        error => {
            console.log(error);
        } 
        )
    }

}
