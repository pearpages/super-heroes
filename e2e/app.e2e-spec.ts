import { MarvelPage } from './app.po';

describe('marvel App', () => {
  let page: MarvelPage;

  beforeEach(() => {
    page = new MarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
