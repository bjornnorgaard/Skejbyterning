import { browser, by, element } from 'protractor';

export class SbtInteractivePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('st-root h1')).getText();
  }
}
