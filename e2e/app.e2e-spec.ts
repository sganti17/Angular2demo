import { MarlabsPage } from './app.po';

describe('marlabs App', () => {
  let page: MarlabsPage;

  beforeEach(() => {
    page = new MarlabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
