import { Component, Input } from '@angular/core';

@Component({
    selector: 'work-card',
    templateUrl: '../views/work-card.html'
})


export class WorkCardComponent{
    
    @Input('data-title') title:string;
    @Input('data-summary') summary:string;
    @Input('data-roles') roles:Array<string>;
    @Input('data-image') highlightImage:string;
    @Input('data-image-alt') imageAltText:string;

    constructor(){

    }
}