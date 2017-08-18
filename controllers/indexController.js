var models = require('../models');
var async = require('async');

exports.index = (req, res) => {
   async.parallel({
      users: function(callback) {
        models.User.findAll()
          .then(function(results) {
            var j = [];
            results.forEach(function(result) {
              console.log(JSON.stringify(result, null, 2));
              var x = {};
              x['username'] = result.email;
              console.log(x);
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
              // console.log(JSON.stringify(result, null, 2));
              var x = {};
              console.log(x);
              x['id'] = result.id;
              x['title'] = result.title;
              x['description'] = result.description;
              j.push(x);
            })
            callback(null, j);
          });
          // console.log(j);
      }
    },
    function(err, results) {
      console.log(results.jobs);
      res.render('index', {
        title: 'Homepage',
        users: results.users,
        jobs: results.jobs
      });
    }
  )
 };