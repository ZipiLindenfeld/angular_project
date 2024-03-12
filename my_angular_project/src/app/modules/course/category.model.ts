export class Category {
    id: number;
    name: string;
    iconRouting: string;
    constructor(id: number, name: string = "", routing: string) {
        this.id = id;
        this.name = name;
        this.iconRouting = routing;
    }
}