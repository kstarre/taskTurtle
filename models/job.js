'use strict';

module.exports = function(sequelize, Sequelize) {
  var Job = sequelize.define("Job", {
    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    description: {
      type: Sequelize.TEXT
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    construction: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    indoor: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    landscaping: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    outdoor: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    renovation: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    location: {
      type: Sequelize.INTEGER,
      len: [5]
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