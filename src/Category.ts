export default class Category {
    private _title: string;
    private _parent: Category | undefined;

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

    get parent(): Category | undefined {
        return this._parent;
    }
}
