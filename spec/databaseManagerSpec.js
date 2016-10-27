var DatabaseManager = require("../lib/databaseManager");
var models = require('../models/index');

describe("Database Manager", function() {

  beforeEach(function(){
    databaseManager = new DatabaseManager();
    models.Event.destroy({where: {name: "Single Mingle"} }).then(function(){
      models.Event.create({
          name: "Single Mingle",
          description: "A Mingle for Singles",
          address: "52 Commercial St",
          date:  "2016-10-26 18:30:00+01",
          link: "http://www.makersacademy.com",
          meetup_id: "1234"}).then(function() { done() });
    });
  });

  it('retrieves database entries', function(){
    expect(databaseManager.getEvents()).toEqual([])
  })



});
