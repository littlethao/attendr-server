process.env.NODE_ENV ='test';
var server = require('../index.js')
var models = require('../models/index')
var script = require('../bin/updateEvents')
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

describe('Meetup API script', function() {
  beforeEach(function(done) {
    server.listen(3000);
    script.updateEvents().then(function(){done()});
  });

  afterEach(function(done) {
    server.close();
    models.Event.destroy({where: {}}).then(function(){done()});
  });

  it('updates new events',function(done){
    models.Event.findAll().then(function(results){
      expect(results.length).toBeGreaterThan(1);
      done();
    });
  });
});
