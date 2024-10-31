import { Selector } from 'testcafe';

fixture`Getting Started`
  .page`https://devexpress.github.io/testcafe/example`;

test('test aplicaion movil', async t => {
  await t
    .typeText('#developer-name', 'John Doe')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, John Doe!');
});
