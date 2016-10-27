'use strict';
module.exports = function(sequelize, DataTypes) {
  var RSVP = sequelize.define('RSVP', {
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        RSVP.belongsTo(models.User);
        RSVP.belongsTo(models.Event);
      }
    }
  });
  return RSVP;
};
