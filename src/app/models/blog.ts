export class Blog {
    constructor(
        public id: number,
        public title: string,
        public shortname: string,
        public date: Date,
        public wysiwyg: string,
        public portrait_image: Array<object>,
        public highlight_image: Array<object>,
        public comments: Array<object>
    ){}
}