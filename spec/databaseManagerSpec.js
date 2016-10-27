process.env.NODE_ENV ='test';
var DatabaseManager = require("../lib/databaseManager");
var models = require('../models/index');

describe("Database Manager", function() {

  beforeEach(function(done){
    databaseManager = new DatabaseManager();
    single_event = {
        name: "Single Mingle",
        description: "A Mingle for Singles",
        address: "52 Commercial St",
        date:  "2016-10-26 18:30:00+01",
        link: "http://www.makersacademy.com",
        meetup_id: "1234"}

    models.Event.create(single_event).then(function(results) {
      event_id = results.id;
      done();
    });
  });

  afterEach(function(done) {
    models.Event.destroy({where: {} })
    models.RSVP.destroy({where: {} })
    models.User.destroy({where: {} }).then(function(){done()})
  });

  it('retrieves database entries', function(done){
      databaseManager.getEvents().then(function(results){
        console.log(results);
        expect(results.pop().name).toEqual(single_event.name);
        done();
      })
  })

  it('adds user to database', function(done){
      databaseManager.addUser({first: 'Elizabeth', last: "test", email:"test"}).then(function(results){
        models.User.findAll().then(function(results){
          expect(results.length).toEqual(1);
          models.User.destroy({where: {} })
          done();
        });
      });
  })

  it('adds RSVPs to database', function(done){
    var user = {first:'Elizabeth', last:'Coffee', email:'test@example.com', pic:'123', gender:'F', age: '14'}

    models.User.create(user).then(function(results){
      var user_id = results.id;
      databaseManager.addResponse({user_id: user_id, event_id: event_id}).then(function(results){

        models.RSVP.findAll().then(function(results){
          expect(results.length).toEqual(1);
          done();
        });
      });
    });
  })



});
