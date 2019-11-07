

export function coucou(name: string): void {
    console.log('coucou', name);
}


export class Person {

    constructor(private _name: string) {
        console.log('Person ctor', _name);
    }

    get name(): string {
        return this._name;
    }
}

export * from "./test.po";