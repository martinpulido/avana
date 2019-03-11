import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Component({
    selector: 'work-detail',
    templateUrl: '../views/work-detail.html',
    providers: [ProjectService]
})

export class WorkDetailComponent {
    public allProjects:Project;
    public thisProject:Project;
    public answer:any;

    constructor(
        private _projectService:ProjectService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _titleService: Title
    ){
        this.thisProject = null;
    }

    ngOnInit(){
        this.getProject();
    }

    setTitle( newTitle: String ){
        this._titleService.setTitle( ':: avana LLC | ' + newTitle + ' ::' );
    }

    getProject(){
        //
        this._route.params.forEach((params:Params) => {
            // Get 'short-name' param
            let shortName: string = params['short-name'];

            // Get project from JSON
            this._projectService.getProjects().subscribe(
                response => {
                    this.answer = response;

                    for(let i=0; i<this.answer.length; i++){
                        if(this.answer[i].shortname === shortName){
                            this.thisProject = this.answer[i];
                            console.log(this.thisProject);
                            this.setTitle(this.thisProject.title);
                            break;
                        }
                    }

                    if(this.thisProject === null){
                        console.error('404. Not Found');
                        //this._router.navigate(['/404']);
                    }
                },
                error => {
                    console.error(<any>error);
                }

            );

            // API Rest Code: g8g5e87o8

            
        });
    }
}