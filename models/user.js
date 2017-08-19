module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    firstname: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }   
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: true
    },
    last_login: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.ENUM("user", "contractor", "admin"),
      defaultValue: "user"
    },
    createdAt: {
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Job);
    User.hasMany(models.Bid);
  }
  return User;
};