'use strict';
var faker = require('faker');
var bCrypt = require('bcrypt-nodejs');

var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var tempPassword = generateHash('test');

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user1@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user2@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user3@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user4@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user5@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'contractor1@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'contractor'
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'contractor2@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'contractor'
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'contractor3@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'contractor'
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'contractor4@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'contractor'
    }, {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'contractor5@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'contractor'
    }], {});
  },

  down: function(queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {});
  }
};