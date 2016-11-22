import { Component, Input } from '@angular/core';
import { SessionService } from '../../Services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-navigation-component',
    templateUrl: 'app/shared/Landing-Navigation/landing-navigation.component.html',
    styleUrls:['app/shared/Landing-Navigation/landing-navigation.component.css'],
    providers:[SessionService]
})
export class LandingNavigation { 
    @Input() isLoggedIn:boolean;
}
