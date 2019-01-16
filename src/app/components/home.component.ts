import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent{
    public title:string;
    public claim:string;
    public description:string;

    constructor(){
        this.title = 'avana';
        this.claim = 'A Brand new Agency.';
        this.description = 'This is the story of Avana, a minimal Bootstrap template for creative agency.';
    }
}