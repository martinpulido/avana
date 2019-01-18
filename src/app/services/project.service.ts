import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ProjectService {
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getProjects(){
        // Function to get all projects info
        return this._http.get( this.url );
    }
    getProjectId(id:number){{
        // Function to get a project info
    }}
}