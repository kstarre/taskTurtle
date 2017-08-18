var models = require('../models');
var Bid = models.Bid;

exports.create_a_bid = (req, res) => {
  // res.send('NOT IMPLEMENTED: Create a bid for job');
  console.log(req.params.id);
  Bid.create({
      amount: req.body.bidAmount,
      duration: req.body.jobDuration,
      accepted: req.body.accepted,
      JobId: req.params.id
    })
    .then(function() {
      res.redirect('/jobs/' + req.params.id);
    });
};

