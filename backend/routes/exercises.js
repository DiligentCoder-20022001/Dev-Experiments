const router = require('express').Router();
let Exercise = require('../models/exercise.model');
router.route('/').get((req, res) => {
    //get all the exercises 
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        username: username, 
        description: description, 
        duration: duration,
        date: date
    });
    //save to db 
    newExercise.save()
        .then(() => res.json('Exercise added'))
        .catch(err => res.status(400).json('Error' + err));
});

//getting by id 
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id) // id will be there in the url -> will be extracted from there 
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
})

//deleting by id 
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});
//updating with the help of id 
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration; 
            exercise.date = Date.parse(req.body.date);
            exercise.save()
                .then(() => res.json("Exercise updated!!"))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});
module.exports = router;