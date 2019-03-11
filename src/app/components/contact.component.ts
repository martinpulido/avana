import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'contact',
    templateUrl: '../views/contact.html'
})

export class ContactComponent {
    public title:string;
    public claim:string;
    public phone:string;
    public mail:string;

    constructor(
        private _titleService: Title
    ){
        this.title = 'Hey Thr!';
        this.claim = 'we love to hear you.';
        this.phone = '+8197654321';
        this.mail = 'contact@avana.com';
    }

    ngOnInit(){
        this.setTitle('Contact');
    }

    setTitle( newTitle: String ){
        this._titleService.setTitle( ':: avana LLC | ' + newTitle + ' ::' );
    }
}