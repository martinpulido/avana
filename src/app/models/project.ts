export class Project{
    constructor(
        public id: number,
        public title: string,
        public summary: string,
        public description: string,
        public url: string,
        public roles: Array<string>,
        public highlight_image: Array<object>,
        public images: Array<object>
    ){}
}