import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/User';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    
    private _heroes= 'http://localhost:4000/heroes';
    
    constructor(private _http: Http) { }
    loginSimulation(model:Object): Observable<IUser[]> {
        return this._http.get(this._heroes+"?name="+model.name)
            .map((response: Response) => <IUser[]>response.json())
            .do(response => {
                if(response[0].password !== model.password){
                    alert('Invalid Credentials');
                    throw new Error('Invalid Credentials')
                }
            })
            .catch(this.handleError);
    }
    registerSimulation(model: Object):Observable<IUser[]>{
        let body = model;
        model.role="USER";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
 
        return this._http.post(this._heroes, body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}