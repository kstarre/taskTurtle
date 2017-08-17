'use strict';

module.exports = function(sequelize, Sequelize) {
<<<<<<< HEAD
    var Job = sequelize.define("Job", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        jobtitle: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        jobdescription: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.INTEGER,
            validate: {
                isInt: true,
                allowNull: false
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
        status: {
            type: Sequelize.ENUM("active", "inactive"),
            defaultValue: "active"
        }
    });
=======
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
      type: Sequelize.INTEGER,
      notEmpty: true
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
>>>>>>> 03e770a10cf21e16074cb32f166a7885901e5f24

    Job.associate = function(models) {
        Job.belongsTo(models.User);
        Job.hasMany(models.Bid);
    }

    return Job;
};