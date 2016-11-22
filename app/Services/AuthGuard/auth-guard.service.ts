import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { SessionService } from  '../session.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _sessionService:SessionService, protected _router: Router){

    }
    canActivate() {
        let hero = this._sessionService.getSessionData();
        if(hero.alias){
            return true;
        }
        this._router.navigate(['/login']);

        return false;
    }

}