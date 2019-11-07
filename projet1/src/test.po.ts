import { ElementFinder, element, by } from 'protractor';

export class TestPo {

    public static historyTitle(): ElementFinder {
        return element(by.css('h4'));
    }
}