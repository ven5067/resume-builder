export class Resume {
    constructor(
        private info: any,
        private content: any,
        private styles: any,
        private defaultStyle: any,
        private footer: any
    ) {}

    set setInfo(info: any) {
        this.info = info;
    }

    set setContent(content: any) {
        this.content.push(...content);
    }

    get getContent() {
        return this.content;
    }

    set setStyles(styles: any) {
        this.styles = styles;
    }

    set setDefaultStyles(defaultStyle: any){
        this.defaultStyle = defaultStyle;
    }

    set setFooter(footer: any) {
        this.footer = footer;
    }

}
