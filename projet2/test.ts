

// import {coucou, Person} from '../projet1/src/index'

import { coucou, Person } from 'projet1';

// Install @types/node, to have declaration for node package
import * as path from 'path';
import * as fs from 'fs';

import {browser, ExpectedConditions, element, by} from 'protractor';


async function main() {

    await browser.wait(ExpectedConditions.visibilityOf(element(by.css("test"))), 1000);
    coucou('tata');
    console.log('date:', new Date());
    setTimeout(main, 5000);

    fs.writeFileSync(path.join(__dirname, 'test.txt'), new Date());
    const person = new Person('tutu');
    console.log(person.name);
}


main();
