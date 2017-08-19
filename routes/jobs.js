var express = require('express');
var router = express.Router();
var jobController = require('../controllers/jobController');
var authController = require('../controllers/authController');
/* GET users listing. */
// router.get('/create', jobController.create);

// Return all jobs, create a job
router.get('/', jobController.job_list);
router.post('/', authController.isLoggedIn, jobController.create_a_job_post);
router.get('/create', authController.isLoggedIn, (req, res) => {
  res.render('jobs/create');
});
router.get('/search', jobController.job_list_search);
// Send user to create job page
// router.get('/create', (req, res) => { res.render('jobs/create'); });
// router.get('/create', jobController.create_a_job_get);



// Get single job details/edit/delete
router.get('/:id', jobController.get_job_details);
router.put('/:id', jobController.update_a_job);
router.delete('/:id', jobController.delete_a_job);

// Bids
/*router.get('/:id', jobController.get_bids_on_job);*/
router.post('/:id/bids', jobController.create_a_bid);
router.post('/jobs/:id/bids', jobController.create_a_bid);
router.put('/:id/bids/:bidId', jobController.accept_bid);  


module.exports = router;