import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';

@Component({
    selector: 'blog',
    templateUrl: '../views/blog.html',
    providers: [BlogService]
})

export class BlogComponent{
    public title:string;
    public claim:string;
    public description:string;

    public articles: Blog;

    constructor(
        private _blogService: BlogService
    ){
        this.title = 'News';
        this.claim = 'Updates from studio';
        this.description = 'Get all information about our studio from latest news posts & updates page.';
    }

    ngOnInit(){
        this.getPosts();
    }

    getPosts(){
        this._blogService.getPosts().subscribe( 
            result => {
                let resultado: any = result;
                this.articles = resultado;
            },
            err => {
                console.error(err);
            }
        )
    }
}