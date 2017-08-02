import { SkejbyterningNgPage } from './app.po';

describe('skejbyterning-ng App', () => {
  let page: SkejbyterningNgPage;

  beforeEach(() => {
    page = new SkejbyterningNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
