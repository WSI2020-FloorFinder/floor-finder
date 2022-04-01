/* global describe, it */

const assert = require('assert');

describe('The scraper library', function () {
  it('should not mess with truth', function () {
    assert(true);
  });
});

describe('Math', function () {
  it('should test if 2 + 2 = 4', function () {
    assert.equal(4, 2 + 2);
  });
  it('should test if 2 + 2 = 5', function () {
    assert.equal(5, 2 + 2);
  });
});
