'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    meetup_id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    date: DataTypes.DATE,
    link: DataTypes.TEXT,
    Latitude: DataTypes.STRING,
    Longitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};
