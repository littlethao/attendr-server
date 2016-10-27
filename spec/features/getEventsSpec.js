process.env.NODE_ENV ='test';
var models = require('../../models/index');
var request = require('request');
var server = require('../../index.js')

describe('get Events', function() {
  beforeEach(function(done) {
    server.listen(3000);
    models.Event.create({
        name: "Single Mingle",
        description: "A Mingle for Singles",
        address: "52 Commercial St",
        date:  "2016-10-26 18:30:00+01",
        link: "http://www.makersacademy.com",
        meetup_id: "1234"}).then(function() { done() });
  });

  afterEach(function(done) {
    server.close();
    models.Event.destroy({where: {} }).then(function(){done()})
  });

  it('returns list of events',function(done){
    request('http://localhost:3000/events', function(error, response, body) {
      expect(body).toContain('"meetup_id":"1234","name":"Single Mingle"')
      done()
    });
  });
});
