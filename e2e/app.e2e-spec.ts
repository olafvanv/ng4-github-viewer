import { GithubAppPage } from './app.po';

describe('github-app App', () => {
  let page: GithubAppPage;

  beforeEach(() => {
    page = new GithubAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
