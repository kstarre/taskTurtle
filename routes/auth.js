var authController = require("../controllers/authcontroller.js");
const db = require("../models");

module.exports = function(app, passport) {
    app.get("/", isLoggedIn, authController.dashboard);
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    app.get("/dashboard", isLoggedIn, authController.dashboard);
    app.get("/logout", authController.logout);
    app.get("/createjob", authController.createjob);


    app.post("/createjob", (req, res) => {
        db.Job.create({
            jobtitle: req.body.jobTitle,
            jobdescription: req.body.jobDescription,
            duration: req.body.bidLength,
            construction: (req.body.construction === "on" ? true : false),
            indoor: (req.body.indoor === "on" ? true : false),
            landscaping: (req.body.landscaping === "on" ? true : false),
            outdoor: (req.body.outdoor === "on" ? true : false),
            renovation: (req.body.renovation === "on" ? true : false)
        }).then(() => {
            res.redirect("/");
        })
    });

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",
        failureRedirect: "/signup"
    }));

    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/dashboard",
        failureRedirect: "signin"
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/signin");
    }
}