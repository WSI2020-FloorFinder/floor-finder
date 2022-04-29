/* global describe, it */

const request = require('supertest');
const assert = require('assert');
const { expect } = require('chai');
const app = require('../app');
const { officeScraper } = require('../lib/scraper');
const { officeLocationScraper } = require('../lib/scraper');
const { description } = require('../lib/scraper');


describe('The scraper library', function () {
  it('should not mess with truth', function () {
    assert(true);
  });
});

describe('OfficeScraper', function () {
  it('should be a function', function () {
    expect(officeScraper).to.be.a('function');
  });
});

describe('OfficeLocationScraper', function () {
  it('should be a function', function () {
    expect(officeLocationScraper).to.be.a('function');
  });
});

describe('Description', function () {
  it('should be a function', function () {
    expect(description).to.be.a('function');
  });
});

describe('The GET / route', function() {
  it('should return a 200 status code', function(done) {
    request(app).get('/').expect(200, done);
  });
});

describe('The GET /none route', function () {
  it('should return a 404 status code', function (done) {
    request(app).get('/none').expect(404, done);
  });
});