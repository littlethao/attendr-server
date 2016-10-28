var models = require('../models/index');

function DatabaseManager (){}

DatabaseManager.prototype =  {
  getEvents: function() {
    return models.Event.findAll().then(function(results){
      return results.map(function(element){
        var x = element.dataValues;
        delete x.id;
        return x;
      });
    })
  },

  addUser: function(user){
    return models.User.create(user).then(function(results){
      return results.id;
    });
  },

  addResponse: function(params){
    var record = {UserId: params.user_id, EventId: params.event_id}
    return models.RSVP.create(record).then(function(results){
      return results
    })
  },
  getMatches: function(params){
    var UserId = parseInt(params.user_id);
    var query = 'SELECT * FROM "Users" WHERE id in (SELECT "UserId" FROM "RSVPs" WHERE "UserId" <> '
    +UserId
    +' AND "EventId" in (SELECT "EventId" FROM "RSVPs" WHERE "UserId" ='
    +UserId
    +'))'
    return models.sequelize.query(query, { type: models.sequelize.QueryTypes.SELECT})
      .then(function(results){return results})
  }
};

module.exports = DatabaseManager;
