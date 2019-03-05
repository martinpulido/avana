import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'form-reply',
    templateUrl: '../views/form-reply.html'
})

export class FormReplyComponent {
    public title: string;
    public buttonTitle: string;

    constructor(
        
    ){
        this.title = "Leave a comment";
        this.buttonTitle = "Post Comment";
    }

    ngOnInit(){
        console.log('form-reply.component.ts cargado')
    }

    onSubmit(){
        //console.log(this.contact);
        //this.validate();
    }

    validate(){
        let msgLayer: HTMLElement = document.querySelector('#message');
        let name: HTMLInputElement = document.querySelector("#name");
        let email: HTMLInputElement = document.querySelector("#email");
        let comments: HTMLTextAreaElement = document.querySelector("#comments");
        let layerError: HTMLElement;

        if( document.querySelector('#message > p') === null ){
            layerError = document.createElement("p");
            layerError.className = 'error_message';
            msgLayer.appendChild(layerError);
        }else{
            layerError = document.querySelector('#message > p');
        }

        

        if(name.value === ""){
            layerError.innerHTML = 'You must enter your name';
            
        }else{
            layerError.innerHTML = '';

            let filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

            if(email.value === "" || !filter.test(email.value)){
                layerError.innerHTML = 'Please enter a valid email address.';
                email.className = 'error';
            }else{
                layerError.innerHTML = '';
                email.classList.remove('error');

                if(comments.value === ""){
                    layerError.innerHTML = 'Please enter your message.';
                }else{
                    layerError.innerHTML = '';
                    let resultado:any;

                    //resultado = this._contactServices.sendData(name.value);
                    console.log(resultado);

                    //let $message = $('#message');

                    // Form is correct
                    /*$message.slideUp(750, function() {
                        $message.hide();
                        $message.html("");
                        $message.html(resultado);
                        $message.slideDown('slow');
                        $('#cform').slideUp('slow');
                    })*/
                }
            }

        }
        
    }
}