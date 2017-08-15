'use strict';

module.exports = function(sequelize, Sequelize) {
  var Job = sequelize.define("Job", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    description: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    duration: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  Job.associate = function(models) {
    Job.belongsTo(models.User);
    Job.hasMany(models.Bid);
  }

  return Job;
};