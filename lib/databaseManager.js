var models = require('../models/index');

function DatabaseManager (){}

DatabaseManager.prototype =  {
  getEvents: function() {
    models.Event.findAll().then(function(results){
      return results.map(function(element){ return element.dataValues});
    })
  },

};

module.exports = DatabaseManager;
