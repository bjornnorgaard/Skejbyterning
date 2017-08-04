import { SbtMdNgPage } from './app.po';

describe('sbt-md-ng App', () => {
  let page: SbtMdNgPage;

  beforeEach(() => {
    page = new SbtMdNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
