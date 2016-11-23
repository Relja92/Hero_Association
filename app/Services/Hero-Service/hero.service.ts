import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/User';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    
    private _heroes= 'http://localhost:4000/heroes';
    
    constructor(private _http: Http) { }
    
    getUsers(): Observable<IUser[]> {
        return this._http.get(this._heroes)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getSingleUser(id:string): Observable<IUser[]> {
        return this._http.get(this._heroes+'/'+id)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getProfile():Observable<IUser[]> {
        const id = localStorage.getItem("id");
        return this._http.get(this._heroes+'/'+id)
            .map((response: Response) => <IUser[]>response.json())
            .do(response => {

            })
            .catch(this.handleError);
    }
    deleteHero(id:string): Observable<IUser[]> {
        return this._http.delete(this._heroes+'/'+id)
            .map((response: Response) => <IUser[]>response.json())
            .do(response => {
                console.log(response);
            })
            .catch(this.handleError);
    }
    updateHero(id:string, model: Object):Observable<IUser[]>{
        let body = model;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "put" });
 
        return this._http.put(this._heroes+'/'+id, body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}