import { LuksybeeLoginPage } from './app.po';

describe('Luksybee App', () => {
  let page: LuksybeeLoginPage;

  beforeEach(() => {
    page = new LuksybeeLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
