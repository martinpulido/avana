import { Component, Input } from '@angular/core';

@Component({
    selector: 'team-member',
    templateUrl: '../views/team-member.html'
})

export class TeamMemberComponent {
    
    @Input('data-name') name:string;
    @Input('data-position') position: string;
    @Input('data-image') highlightImage: string;
    @Input('data-image-alt') imageAltText: string;

    constructor(){}

}