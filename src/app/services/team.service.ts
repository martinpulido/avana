import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class TeamService {
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = GLOBAL.url + 'team.json';
    }

    getTeam(){
        // Function to get team info
        return this._http.get( this.url );
    }
}