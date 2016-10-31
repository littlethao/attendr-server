'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    fbid: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
