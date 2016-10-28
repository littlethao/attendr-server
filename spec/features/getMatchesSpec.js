process.env.NODE_ENV ='test';
var models = require('../../models/index');
var request = require('request');
var server = require('../../index.js')
var databaseCleaner = require('../support/cleaner');

describe('get Matches', function() {
  beforeEach(function(done) {
    server.listen(3000);
    var user = {first:'Elizabeth', last:'Coffee', email:'test@example.com', pic:'123', gender:'F', age: '24'}
    var user2 = {first:'Tom', last: 'Stuart', email:'a@b.com', pic:'567', gender:'M', age: '24'}
    var single_event = {
        name: "Single Mingle",
        description: "A Mingle for Singles",
        address: "52 Commercial St",
        date:  "2016-10-26 18:30:00+01",
        link: "http://www.makersacademy.com",
        meetup_id: "1234"}

    models.User.create(user).then(function(results){user_id = results.id
    models.User.create(user2).then(function(results){
      user2_id = results.id

    models.Event.create(single_event).then(function(results) {
      event_id = results.id;
      models.RSVP.create({EventId: event_id, UserId: user_id})
      models.RSVP.create({EventId: event_id, UserId: user2_id}).then(function(){
        done();
      })
      });
      });
    });
  });

  afterEach(function(done) {
    server.close();
    databaseCleaner.clean(done)
  });

  it('returns list of matches',function(done){
    request('http://localhost:3000/matches?user_id='+ user_id, function(error, response, body) {
      expect(body).toContain('"first":"Tom","last":"Stuart"')
      done()
    });
  });
});
