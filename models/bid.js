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
    },
    created_on: {
      type: Sequelize.DATE
    }
    // ,
    // {
    //   // Foreign Key to Job ID
    // },
    // {
    //   // Foreign Key to Company ID
    // }
  });

  return Bid;
}