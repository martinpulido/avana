export class Team{
    constructor(
        public id: number,
        public name: string,
        public shortname: string,
        public position: string,
        public highlight_image: Array<object>
    ){}
}