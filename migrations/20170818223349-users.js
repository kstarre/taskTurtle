'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        notEmpty: true
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.createTable('Jobs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
          notEmpty: true
        },
        description: {
          type: Sequelize.STRING
        },
        duration: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: true
          }
        },
        category: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        location: {
          type: Sequelize.INTEGER,
          len: [5]
        },
        status: {
          type: Sequelize.ENUM("active", "inactive"),
          defaultValue: "active"
        },
        UserId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    }).then(() => {
      return queryInterface.createTable('Jobs', {
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
        },
        UserId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        JobId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Jobs',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Bids')
      .then(() => {
        return queryInterface.dropTable('Jobs')
      })
      .then(() => {
        return queryInterface.dropTable('Users')
      });
  }
};