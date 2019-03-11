import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutService } from '../services/about.service';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';

@Component({
    selector: 'about',
    templateUrl: '../views/about.html',
    providers: [AboutService, TeamService]
})

export class AboutComponent {
    public title: string;
    public claim: string;
    public summary: string;
    public description: string;

    public members: Team[];

    constructor(
        private _aboutService: AboutService,
        private _teamService: TeamService,
        private _titleService: Title
    ){
        this.title = null;
        this.claim = null;
        this.summary = null;
        this.description = null;
    }

    ngOnInit(){
        this.setTitle('About');
        this.getAboutInfo();
        this.getTeamInfo();
    }

    setTitle( newTitle: String ){
        this._titleService.setTitle( ':: avana LLC | ' + newTitle + ' ::' );
    }

    getAboutInfo(){
        this._aboutService.getAboutInfo().subscribe(
            response => {
                let answer:any = response[0];
                this.title = answer.title;
                this.claim = answer.claim;
                this.summary = answer.summary;
                this.description = answer.description;
            },
            error => {
                console.log(<any>error);
            }
        )
    }

    getTeamInfo(){
        this._teamService.getTeam().subscribe(
            response => {
                let answer:any = response;
                this.members = answer;
            },
            error => {
                console.log(<any>error);
            }
        )
    }

}