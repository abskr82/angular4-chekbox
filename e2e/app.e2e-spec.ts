import { CheckBoxPrjctPage } from './app.po';

describe('check-box-prjct App', () => {
  let page: CheckBoxPrjctPage;

  beforeEach(() => {
    page = new CheckBoxPrjctPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
