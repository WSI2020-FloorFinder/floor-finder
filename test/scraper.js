/* global describe, it */

const assert = require('assert');
const { expect } = require('chai');
// const test_offices = require('../lib/test.js');
const test_offices = require('./test');

const foo = 'bar';
const beverages = { tea: ['chai', 'matcha', 'oolong'] };

const blankx = [];

describe('The scraper library', function () {
  it('should not mess with truth', function () {
    assert(true);
  });
});

describe('Data', function () {
  it('types should be', function () {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
  });
});

describe('Blank', function () {
  it('should be empty', function () {
    expect(blankx).to.be.an('array');
  });
});

describe('OfficeScraper', function () {
  it('should be a function', function () {
    expect(test_offices).to.be.a('function');
  });
});

describe('Math', function () {
  it('should test if 2 + 2 = 4', function () {
    assert.equal(4, 2 + 2);
  });
  it('should test if 2 + 2 = 5', function () {
    assert.equal(4, 2 + 2);
  });
});

/* describe('Offices', function () {
  it('should be an array', function () {
    expect(offices).to.be.an('array');
  });
}); */

// expect([1, 2, 3]).to.be.an('array');
