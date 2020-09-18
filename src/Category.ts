import { Nullable } from "./Types";

export default class Category {
    private _title: string;
    private _parent: Nullable<Category>;

    constructor(title: string, parent?: Category) {
        this._title = title;
        this._parent = parent;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }

    get parent(): Nullable<Category> {
        return this._parent;
    }
}
