const router = require('express').Router();
let User = require('../models/user.model');
router.route('/').get((req, res) => {
    //get all the users
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err));
});

//add the users 
router.route('/add').post((req, res) => {
    const username = req.body.username; // get the username from the frontend
    const newUser = new User({username}); //model the user according to the format of the User model 
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error' + err));
})

//export the router 
module.exports = router;
