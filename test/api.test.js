/*global fetch*/
"use strict";

var expect = require('chai').expect;
var nock = require('nock');
var good = '{"foo":"bar"}';
var walmart = require('../index.js')('***key***');

describe('walmart', function() {
	it('should allow for a product get', function(done) {
		nock('https://www.walmart.com')
			.get('/product/mobile/api/2020')
			.reply(200, good);
		walmart.getItem(2020).then(function(data) {
			expect(data.foo).to.equal("bar");
			done();
		});
	});

	it('should allow for a product get with terra', function(done) {
		nock('https://www.walmart.com')
			.get('/product/terra/2020')
			.reply(200, good);
		walmart.getItem(2020, true).then(function(data) {
			expect(data.foo).to.equal("bar");
			done();
		});
	});

  it('should allow for a product get by upc', function(done) {
    nock('https://www.walmart.com')
      .get('/product/mobile/api/upc/2020')
      .reply(200, good);
    walmart.getItemByUPC(2020).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an items feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/items?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.items(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an bestsellers feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/bestsellers?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.bestSellers(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an preorder feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/preorder?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.preOrder(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an rollback feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/rollback?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.rollback(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an clearance feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/clearance?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.clearance(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an specialbuy feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/feeds/specialbuy?apiKey=***key***&categoryId=1234')
      .reply(200, good);
    walmart.feeds.specialBuy(1234).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an value of the day feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/vod?apiKey=***key***')
      .reply(200, good);
    walmart.feeds.valueOfTheDay().then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for an value of the day feed request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/trends?apiKey=***key***&format=json')
      .reply(200, good);
    walmart.feeds.trending().then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a search request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/search?apiKey=***key***&query=foo')
      .reply(200, good);
    walmart.search('foo').then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a search request with facets', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/search?apiKey=***key***&query=foo&facets=on')
      .reply(200, good);
    walmart.search('foo', {facets: 'on'}).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a taxonomy request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/taxonomy?apiKey=***key***')
      .reply(200, good);
    walmart.taxonomy().then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a recommendations request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/nbp?apiKey=***key***&itemId=2020')
      .reply(200, good);
    walmart.recommendations(2020).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a reviews request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/reviews/2020?apiKey=***key***&format=json')
      .reply(200, good);
    walmart.reviews(2020).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a stores by position request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/stores?apiKey=***key***&lon=22&lat=45')
      .reply(200, good);
    walmart.stores.byPosition(45, 22).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a stores by city request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/stores?apiKey=***key***&city=houston')
      .reply(200, good);
    walmart.stores.byCity("houston").then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a stores by zip request', function(done) {
    nock('https://api.walmartlabs.com')
      .get('/v1/stores?apiKey=***key***&zip=94587')
      .reply(200, good);
    walmart.stores.byZip(94587).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a store search', function(done) {
    nock('http://search.mobile.walmart.com')
      .get('/search?query=foo&store=100')
      .reply(200, good);
    walmart.stores.search(100, "foo").then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });

  it('should allow for a store search with extras', function(done) {
    nock('http://search.mobile.walmart.com')
      .get('/search?query=foo&store=100&fooz=baz')
      .reply(200, good);
    walmart.stores.search(100, "foo", {fooz: "baz"}).then(function(data) {
      expect(data.foo).to.equal("bar");
      done();
    });
  });
});