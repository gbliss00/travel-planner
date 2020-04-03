const {getApiMeta} = require('.');
test('test api values', () => {
    
    expect(getApiMeta().pixabay.baseUrl).toBe('https://pixabay.com/api');
  })