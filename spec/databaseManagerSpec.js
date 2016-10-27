process.env.NODE_ENV ='test';
var DatabaseManager = require("../lib/databaseManager");
var models = require('../models/index');

describe("Database Manager", function() {

  beforeEach(function(done){
    databaseManager = new DatabaseManager();
    object = { name: 'Single Mingle',
               description: 'A Mingle for Singles',
               address: '52 Commercial St',
               date: '2016-10-26 18:30:00+01',
               link: 'http://www.makersacademy.com',
               meetup_id: '1234' }

    models.Event.destroy({where: {name: "Single Mingle"} }).then(function(){
      models.Event.create(object).then(function() { done() });
    });
  });

  it('retrieves database entries', function(done){
      databaseManager.getEvents().then(function(results){
        expect(results.pop().first).toEqual(object.first);
        done();
      })
  })

  it('adds user to database', function(done){
      databaseManager.addUser({first: 'Elizabeth', last: "test", email:"test"}).then(function(results){
        models.User.findAll().then(function(results){
          console.log(results);
          expect(results.length).toEqual(1);
          models.User.destroy({where: {first: "Elizabeth"} })
          done();
        });
      });
  })



});
