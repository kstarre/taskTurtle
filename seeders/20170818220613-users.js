'use strict';
var faker = require('faker');
var bCrypt = require('bcrypt-nodejs');

var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var tempPassword = generateHash('test');

var userData = [];
for (var i = 0; i < 50; i++) {
  userData[i] = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: 'user' + i + '@gmail.com',
    password: tempPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', userData).then(() => {
      return queryInterface.bulkInsert('Jobs', [{
        title: "Paint the house",
        description: "I have a home that is 3,000 sq ft. that I need painted",
        duration: 4,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Cleaning",
        description: "Need someone to come and clean the house",
        duration: 5,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    });
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};