module.exports = function(sequelize, Sequelize) {
  var Bid = sequelize.define("bid", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    amount: {
      type: Sequelize.DECIMAL,
      notEmpty: true
    }
  }, 
  {
    classMethods: {
      associate: function(models) {
        Bid.belongsTo(models.Job, {
          foreignKey: {
            allowNull: false
          }
        });

        Bid.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Bid;
};