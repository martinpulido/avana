import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: '../views/contact.html'
})

export class ContactComponent {
    public title:string;
    public claim:string;
    public phone:string;
    public mail:string;

    constructor(){
        this.title = 'Hey Thr!';
        this.claim = 'we love to hear you.';
        this.phone = '+8197654321';
        this.mail = 'contact@avana.com';
    }
}