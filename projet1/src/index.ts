

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

import { ElementFinder, element, by } from 'protractor';

export class TestPo {

    public static historyTitle(): ElementFinder {
        return element(by.css('h4'));
    }
}