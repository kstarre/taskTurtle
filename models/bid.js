module.exports = function(sequelize, Sequelize) {
  var Bid = sequelize.define("Bid", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    amount: {
      type: Sequelize.DECIMAL,
      notEmpty: true
    },
    duration: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    accepted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  Bid.associate = function(models) {
    Bid.belongsTo(models.Job);
    Bid.belongsTo(models.User);
  }

  return Bid;
};

