import { TestPo } from "projet1";
import { browser } from "protractor";

// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', async function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      expect(await browser.getTitle()).toEqual("Super Calculator");
    });


    it("get history", async () => {
        expect(await TestPo.historyTitle().getText()).toEqual('History');
    })
  });