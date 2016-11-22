import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
    
    constructor() { }
    save(sessionData:Object):void{
        localStorage.setItem('id', sessionData[0].id);
        localStorage.setItem('name', sessionData[0].name);
        localStorage.setItem('alias', sessionData[0].alias);
        localStorage.setItem('age', sessionData[0].age);
        localStorage.setItem('race', sessionData[0].race);
        localStorage.setItem('location', sessionData[0].location);
        localStorage.setItem('level', sessionData[0].level);
        localStorage.setItem('rank', sessionData[0].rank);
    }
    
    clear():void{
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('alias');
        localStorage.removeItem('age');
        localStorage.removeItem('race');
        localStorage.removeItem('timestamp');
        localStorage.removeItem('location');
        localStorage.removeItem('level');
        localStorage.removeItem('rank');
    }

    getSessionData():Object{
        return{
            "id":localStorage.getItem('id'),
            "name":localStorage.getItem('name'),
            "alias":localStorage.getItem('alias'),
            "age":localStorage.getItem('age'),
            "race":localStorage.getItem('race'),
            "location":localStorage.getItem('location'),
            "level":localStorage.getItem('level'),
            "rank":localStorage.getItem('rank')
        }
    }
}