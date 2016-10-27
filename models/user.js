'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: DataTypes.STRING,
    pic: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
