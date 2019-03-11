import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html',
    providers: [ProjectService]
})

export class HomeComponent{
    public title:string;
    public claim:string;
    public description:string;

    public projects:Project[];

    constructor(
        private _projectService: ProjectService,
        private _titleService: Title
    ){
        this.title = 'avana';
        this.claim = 'A Brand new Agency.';
        this.description = 'This is the story of Avana, a minimal Bootstrap template for creative agency.';
    }

    ngOnInit(){
        this.setTitle();
        this.getProjects();
    }

    setTitle(){
        this._titleService.setTitle( ':: avana LLC ::' );
    }

    getProjects(){
        this._projectService.getProjects().subscribe(
            result => {
                let resultado: any = result;
                this.projects = resultado;
            },
            err => {
                console.error(err);
            }
        )
    }
}