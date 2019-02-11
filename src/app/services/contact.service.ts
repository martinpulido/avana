import { Injectable } from '@angular/core';

@Injectable()

export class ContactService {
    public htmlResponse:string;
    public name:string;

    constructor(){
        
    }

    sendData(name:string = ''){
       
        let htmlResponse = `
            <div id='success_page'>
                <h3 class='succes_message'>Email Sent Successfully.</h3>
                <p>Thank you <strong>`+name+`</strong>, your message has been submitted to us.</p>
            </div>`;

        return htmlResponse;
    }
}