import { SbtInteractivePage } from './app.po';

describe('sbt-interactive App', () => {
  let page: SbtInteractivePage;

  beforeEach(() => {
    page = new SbtInteractivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to st!');
  });
});
