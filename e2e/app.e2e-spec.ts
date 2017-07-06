import { ExampleLandingPagePage } from './app.po';

describe('example-landing-page App', () => {
  let page: ExampleLandingPagePage;

  beforeEach(() => {
    page = new ExampleLandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
