import { StackOverflowPage } from './app.po';

describe('stack-overflow App', () => {
  let page: StackOverflowPage;

  beforeEach(() => {
    page = new StackOverflowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
