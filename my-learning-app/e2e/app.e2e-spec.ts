import { MyLearningAppPage } from './app.po';

describe('my-learning-app App', () => {
  let page: MyLearningAppPage;

  beforeEach(() => {
    page = new MyLearningAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
