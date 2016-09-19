describe('Marketplace', () => {

  beforeEach( () => {
    browser.get('/marketplace');
  });

  it('should have correct feature heading', () => {
    expect(element(by.tagName('h1')).getText()).toEqual('Marketplace');
  });

});
