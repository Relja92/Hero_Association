import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/User';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    
    private _allUsers = 'http://localhost:4000/heroes';
    
    constructor(private _http: Http) { }
    
    getUsers(): Observable<IUser[]> {
        return this._http.get(this._allUsers)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getSingleUser(id:string): Observable<IUser[]> {
        return this._http.get(this._allUsers+'/'+id)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}