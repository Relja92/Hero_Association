import { Component, OnInit } from '@angular/core';
import { IUser } from '../Interfaces/User';
import { HeroService } from '../Services/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl:'app/Hero-Details/hero-details.component.html',
  styleUrls: ['app/Hero-Details/hero-details.component.css'],
  providers: [HeroService],
})
export class HeroDetailsComponent {     
    user: IUser[];
    errorMessage: string;
     
    constructor(private _heroService: HeroService, public route: ActivatedRoute) {

    } 
    
  private sub: any;      // -> Subscriber
  private id: string;  // -> var I want to init with my route parameter        
    ngOnInit(): void {
          // get URL parameters
    this.sub = this.route
        .params
        .subscribe(params => {
            this.id = params['id']; // --> Name must match wanted paramter
    });
		this._heroService.getSingleUser(this.id)
			.subscribe(user => this.user = user,
			error => this.errorMessage = <any>error);
	};

  seeDetails(id:string): void{
    console.log(id);
  }}
