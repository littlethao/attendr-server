var models = require('../models/index');

function DatabaseManager (){}

DatabaseManager.prototype =  {
  getEvents: function() {
    return models.Event.findAll().then(function(results){
      return results.map(function(element){
        x = element.dataValues;
        delete x.id;
        return x;
      });
    })
  },

  addUser: function(user){
    return models.User.create(user).then(function(results){
      return results.id;
    });
  }

};

module.exports = DatabaseManager;
