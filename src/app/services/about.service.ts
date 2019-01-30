import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AboutService {
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = GLOBAL.url + 'about.json';
    }

    getAboutInfo(){
        // Function to get about info
        return this._http.get( this.url );
    }
}