import { Component, Input } from '@angular/core';
import { SessionService } from '../../Services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation-component',
    templateUrl: 'app/shared/Navigation/navigation.component.html',
    providers:[SessionService]
})
export class Navigation { 
    @Input() isLoggedIn:boolean;
    hero:Object;

	constructor (private _sessionService: SessionService, private _router:Router) {

    } 
    ngOnInit():void{
        console.log(this.isLoggedIn)
        this.hero = this._sessionService.getSessionData();
    }
    logout():void{
        this._sessionService.clear();
        this._router.navigate( ['login'] );
    }
}
