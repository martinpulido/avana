import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Comment } from '../models/comment';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'form-reply',
    templateUrl: '../views/form-reply.html'
})

export class FormReplyComponent {
    public title: string;
    public buttonTitle: string;
    public comment: Comment;

    constructor(
        
    ){
        this.title = "Leave a comment";
        this.buttonTitle = "Post Comment";
        this.comment = new Comment("","","","");
    }

    ngOnInit(){
        console.log('form-reply.component.ts cargado')
    }

    onSubmit(){
        //console.log(this.contact);
        this.validate();
    }

    validate(){
        let msgLayer: HTMLElement = document.querySelector('#message');
        let name: HTMLInputElement = document.querySelector("#name");
        let email: HTMLInputElement = document.querySelector("#email");
        let url: HTMLInputElement = document.querySelector("#url");
        let comments: HTMLTextAreaElement = document.querySelector("#comments");
        let layerError: HTMLElement;

        if( document.querySelector('#message > p') === null ){
            layerError = document.createElement("p");
            layerError.className = 'text-danger';
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
                    let $message = $('#message');

                    let resultado: string = '<p class="text-success">Thank you <strong>'+this.comment.name+'</strong>, your comment has been sent successfully.';

                    // Form is correct
                    $message.slideUp(750, function() {
                        $message.hide();
                        $message.html("");
                        $message.html(resultado);
                        $message.slideDown('slow');
                        $('#commentForm').slideUp('slow');
                    })
                }
            }

        }
        
    }
}