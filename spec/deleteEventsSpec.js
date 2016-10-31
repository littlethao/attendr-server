process.env.NODE_ENV ='test';
var server = require('../index.js')
var models = require('../models/index')
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

describe('Meetup API script', function() {

  beforeEach(function(done) {
    server.listen(3000);
    var event1 = {
        name: "Single Mingle",
        description: "A Mingle for Singles",
        address: "52 Commercial St",
        date:  "2014-10-26 18:30:00+01",
        link: "http://www.makersacademy.com",
        meetup_id: "1234"};
    var event2 = {
        name: "Twice Mingle",
        description: "A Mingle for Twices",
        address: "52 Commercial St",
        date:  "2060-10-26 18:30:00+01",
        link: "http://www.makersacademy.com",
        meetup_id: "5678"};
    models.Event.create(event1);
    models.Event.create(event2).then(done());
  });

  afterEach(function(done) {
    server.close();
    models.Event.destroy({where: {}}).then(function(){done()});
  });

  it('deletes old events',function(done){
    var script = require('../bin/deleteEvents')
    script.deleteEvents().then(function(results){
      console.log(results);
      models.Event.findAll().then(function(results){
        expect(results.length).toEqual(2);
        done();
      });
    });
  });
});
