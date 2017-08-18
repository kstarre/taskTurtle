// var Job = require('../models/job');
var models = require('../models');
var Job = models.Job;
var Bid = models.Bid;

// Display list of all Jobs
exports.job_list = (req, res) => {
  Job.findAll()
    .then((results) => {
      res.render('jobs/index', { jobs: results });
    });
};

// Display details for Jobs
exports.get_job_details = (req, res) => {
  // res.send('NOT IMPLEMENTED: Job detail GET ' + req.params.id);
  Job.findById(req.params.id)
    .then(job => {
      Bid.findAll({
          where: {
            jobId: req.params.id
          }
        })
        .then(bids => {
          console.log('Hell' + bids);
          // console.log(job.UserId + " " + req.user.id)
          res.render('jobs/job', { job: job, bids: bids })
        })
    })
};

// Display job create form on GET
exports.create_a_job_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Job create GET');
};


exports.create_a_job_post = (req, res) => {
  console.log(req.user.id);
  Job.create({
    title: req.body.jobTitle,
    description: req.body.jobDescription,
    duration: req.body.bidLength,
    construction: (req.body.construction === "on" ? true : false),
    indoor: (req.body.indoor === "on" ? true : false),
    landscaping: (req.body.landscaping === "on" ? true : false),
    outdoor: (req.body.outdoor === "on" ? true : false),
    renovation: (req.body.renovation === "on" ? true : false),
    UserId: req.user.id
  }).then(() => {
    res.redirect("/");
  })

  // Job.create({
  //     title: req.body.title,
  //     description: req.body.description
  //   })
  //   .then(function() {
  //     res.redirect('/');
  //   });
};


// Handle job/delete DELETE
exports.delete_a_job = (req, res) => {
  res.send('NOT IMPLEMENTED: Job delete DELETE' + req.params.id);
};

exports.update_a_job = (req, res) => {
  res.send('NOT IMPLEMENTED: Job update PUT ' + req.params.id);
};

// Bids
exports.create_a_bid = (req, res) => {
  res.send('NOT IMPLEMENTED: Create a bid for job');
}

exports.get_bids_on_job = (req, res) => {
  res.send('NOT IMPLEMENTED: List of all bids on a job');
};

exports.accept_bid = (req, res) => {
  res.send('NOT IMPLEMENTD: Accept a bid for a job');
};