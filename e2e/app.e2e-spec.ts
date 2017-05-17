import { FLEAppPage } from './app.po';

describe('fle-app App', () => {
  let page: FLEAppPage;

  beforeEach(() => {
    page = new FLEAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
