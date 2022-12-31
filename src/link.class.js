export default class Link {
    constructor(type = "ec-amazon") {
        this.tag = ""
        this.links = [];
        this.type = type;
        this.newtab = false;
    }
}