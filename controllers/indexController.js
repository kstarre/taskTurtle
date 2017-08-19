var models = require('../models');
var async = require('async');

exports.index = (req, res) => {
   async.parallel({
      users: function(callback) {
        models.User.findAll()
          .then(function(results) {
            var j = [];
            results.forEach(function(result) {
              var x = {};
              x['username'] = result.email;
              j.push(x);
            })
            callback(null, j);
          });
      },
      jobs: function(callback) {
        models.Job.findAll()
          .then(function(results) {
            var j = [];
            results.forEach(function(result) {
              var x = {};
              x['id'] = result.id;
              x['title'] = result.title;
              x['description'] = result.description;
              j.push(x);
            })
            callback(null, j);
          });
      }
    },
    function(err, results) {
      res.render('index', {
        title: 'Homepage',
        users: results.users,
        jobs: results.jobs
      });
    }
  )
 };