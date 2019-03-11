import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'blog-detail',
    templateUrl: '../views/blog-detail.html',
    providers: [BlogService]
})

export class BlogDetailComponent {
    public allArticles:Blog;
    public thisArticle:Blog;
    public answer:any;

    constructor(
        private _blogService:BlogService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.thisArticle = null;
    }

    ngOnInit(){
        this.getArticle();
    }

    getArticle(){
        //
        this._route.params.forEach((params:Params) => {
            // Get 'short-name' param
            let shortName: string = params['short-name'];

            // Get project from JSON
            this._blogService.getPosts().subscribe(
                response => {
                    this.answer = response;

                    for(let i=0; i<this.answer.length; i++){
                        if(this.answer[i].shortname === shortName){
                            this.thisArticle = this.answer[i];
                            console.log(this.thisArticle);
                            break;
                        }
                    }

                    if(this.thisArticle === null){
                        console.error('404. Not Found');
                        //this._router.navigate(['/404']);
                    }
                },
                error => {
                    console.error(<any>error);
                }

            );


            
        });
    }
}