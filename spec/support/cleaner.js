var models = require('../../models/index');

function databaseCleaner(callback){
  models.Event.destroy({where: {} })
  models.RSVP.destroy({where: {} })
  models.User.destroy({where: {} }).then(function(){callback()})
}

exports.clean = databaseCleaner;
