import { Component, OnInit } from '@angular/core';
import { Navigation } from  './shared/Navigation/navigation.component';
import { LandingNavigation } from  './shared/Landing-Navigation/landing-navigation.component';
import { SessionService } from './Services/session.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html' ,
    styleUrls:['app/app.component.css'],
    providers:[SessionService]
    
})
export class AppComponent implements OnInit { 
    hero:Object;
    isLoggedIn :boolean =false;
    constructor(private _sessionService:SessionService, private _router:Router){
        this._router.events.forEach((event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
                console.log('change');
                this.hero = this._sessionService.getSessionData();
                this.hero.alias? this.isLoggedIn = true : this.isLoggedIn = false;
                this._isLoggedIn(this.isLoggedIn)   
            }
        });
    }
    _isLoggedIn(value:boolean):void{
        this.isLoggedIn = value;
    }

    ngOnInit():void{
        this.hero = this._sessionService.getSessionData();
        this.hero.alias? this.isLoggedIn = true : this.isLoggedIn = false;
    }


}
