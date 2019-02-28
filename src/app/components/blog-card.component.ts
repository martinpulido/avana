import { Component, Input } from '@angular/core';

@Component({
    selector: 'blog-card',
    templateUrl: '../views/blog-card.html'
})


export class BlogCardComponent{
    
    @Input('data-title') title:string;
    @Input('data-shortname') shortname:string;
    @Input('data-date') date:Array<string>;
    @Input('data-image') highlightImage:string;
    @Input('data-image-alt') imageAltText:string;

    constructor(){

    }
}