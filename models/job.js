module.exports = function(sequelize, Sequelize) {
  var Job = sequelize.define("job", {
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
    created_by: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    duration: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  }, {
    classMethods: {
      associate: function(models) {
        Job.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        Job.hasMany(models.Bid);
      }
    }
  });

  // Job.belongsTo(User);

  return Job;
};