import { FindMeARunPage } from './app.po';

describe('find-me-arun App', () => {
  let page: FindMeARunPage;

  beforeEach(() => {
    page = new FindMeARunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
