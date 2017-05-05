import { LocalZooPage } from './app.po';

describe('local-zoo App', () => {
  let page: LocalZooPage;

  beforeEach(() => {
    page = new LocalZooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
