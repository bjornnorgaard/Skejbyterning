import { InteractivePage } from './app.po';

describe('interactive App', () => {
  let page: InteractivePage;

  beforeEach(() => {
    page = new InteractivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
